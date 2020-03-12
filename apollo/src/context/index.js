// @ts-check

// Apollo dependencies
const { AuthenticationError } = require('apollo-server');
const jwt = require('jsonwebtoken');
const jwksClient = require('jwks-rsa');
// Imported prisma-generated object
const { prisma } = require('../generated/prisma-client');

/**
 * This file creates a context object to pass request, user, and prisma client
 * into all resolvers. Throws an error if requests are not authenticated, meaning
 * no token/authorization is attached.
 */

// Creates a jwks Client
const client = jwksClient({
  jwksUri: `https://dev-sxhevmag.auth0.com/.well-known/jwks.json`,
});

// Creates a getKey function
function getKey(header, cb) {
  client.getSigningKey(header.kid, function(err, key) {
    var signingKey = key.publicKey || key.rsaPublicKey;
    cb(null, signingKey);
  });
}

// Options used for verifying the JWT
const jwtVerifyOptions = {
  // Check the issuer to validate the source of the JWT
  issuer: process.env.JWT_ISSUER,
  algorithms: ['RS256'],
};

// Creating the context object
const context = async ({ req, connection }) => {
  // Grabbing the token from headers
  if (connection) {
    const token = connection.context.Authorization;
    if (token) {
      const user = new Promise((resolve, reject) => {
        // Verify the token is valid
        jwt.verify(token, getKey, options, (err, decoded) => {
          if (err) {
            return reject(err);
          }
          resolve(
            decoded.sub,
            decoded.iss,
            decoded.email,
            decoded.name,
            decoded.profile
          );
        });
      });
      return { ...connection, user, prisma };
    } else throw new AuthenticationError('you must be logged in');
  }
  const token = req.headers.authorization;
  if (token) {
    const user = new Promise((resolve, reject) => {
      // Verify the token is valid
      jwt.verify(token, getKey, options, (err, decoded) => {
        if (err) {
          return reject(err);
        }
        resolve(
          decoded.sub,
          decoded.iss,
          decoded.email,
          decoded.name,
          decoded.profile
        );
      });
    });
    return { ...req, user, prisma };
  } else throw new AuthenticationError('you must be logged in');
};

module.exports = context;
