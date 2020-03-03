// @ts-check

// Queries must be defined to return fields of the same type
// See the Query field in the type definitions for examples

/**
 * @param {{ where: import('../generated/prisma-client').ProfileWhereUniqueInput }} args
 * @param {{ prisma: import('../generated/prisma-client').Prisma }} context
 * @returns { Promise }
 */
const profile = async (_, args, context) => {
  // Finding the profile based on args specification
  const profile = await context.prisma.profile(args.where);
  // This next line ensures user needs to be logged in, else return error
  const user = await context.user;

  return profile;
};

/**
 * @param {{ where: import('../generated/prisma-client').ProfileWhereInput }} args
 * @param {{ prisma: import('../generated/prisma-client').Prisma }} context
 * @returns { Promise }
 */
const profiles = async (_, args, context) => {
  // Returns all profiles
  const profile = await context.prisma.profiles(args);
  // This next line ensures user needs to be logged in, else return error
  const user = await context.user;

  return profile;
};

/* EVENT QUERIES */

/**
 * @param {{ where: import('../generated/prisma-client').EventWhereUniqueInput }} args
 * @param {{ prisma: import('../generated/prisma-client').Prisma }} context
 * @returns { Promise }
 */
const event = async (_, args, context) => {
  // Returns all profiles
  const event = await context.prisma.events(args);
  // // This next line ensures user needs to be logged in, else return error
  // const user = await context.user;

  return event;
};

/**
 * @param {{ where: import('../generated/prisma-client').EventWhereInput }} args
 * @param {{ prisma: import('../generated/prisma-client').Prisma }} context
 * @returns { Promise }
 */
const events = async (_, args, context) => {
  // Returns all profiles
  const event = await context.prisma.events(args);
  // // This next line ensures user needs to be logged in, else return error
  // const user = await context.user;

  return event;
};

/* Activity QUERIES */

/**
 * @param {{ where: import('../generated/prisma-client').ActivityWhereUniqueInput }} args
 * @param {{ prisma: import('../generated/prisma-client').Prisma }} context
 * @returns { Promise }
 */
const activity = async (_, args, context) => {
  // Returns all profiles
  const activity = await context.prisma.activity(args.where);
  // // This next line ensures user needs to be logged in, else return error
  // const user = await context.user;

  return activity;
};

/**
 * @param {{ where: import('../generated/prisma-client').ActivityWhereInput }} args
 * @param {{ prisma: import('../generated/prisma-client').Prisma }} context
 * @returns { Promise }
 */
const activities = async (_, args, context) => {
  // Returns all profiles
  const activity = await context.prisma.activities(args);
  // // This next line ensures user needs to be logged in, else return error
  // const user = await context.user;

  return activity;
};


module.exports = {
  profile,
  profiles,
  event,
  events,
  activity,
  activities
};

