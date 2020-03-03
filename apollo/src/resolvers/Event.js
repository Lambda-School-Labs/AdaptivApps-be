// @ts-check

/**
 * @param { import('../generated/prisma-client').Event } parent
 * @param {{ prisma: import('../generated/prisma-client').Prisma }} context
 * @returns { Promise }
 */
const activities = async (parent, _, context) => {
   
    const activity = await context.prisma.event({ id: parent.id }).activities();
  
    return activity;
  };
  
  
  module.exports = {
    activities,
  };