// @ts-check

/**
 * @param { import('../generated/prisma-client').Activity } parent
 * @param {{ prisma: import('../generated/prisma-client').Prisma }} context
 * @returns { Promise }
 */
const event = async (parent, _, context) => {
  
    const event = await context.prisma.activity({ id: parent.id }).event();
    
    return event;
  };
  
  
  module.exports = {
    event,
  };