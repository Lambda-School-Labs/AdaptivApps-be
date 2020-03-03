// @ts-check

/**
 * @param { import('../generated/prisma-client').Event } parent
 * @param {{ prisma: import('../generated/prisma-client').Prisma }} context
 * @returns { Promise }
 */
const activities = async (parent, _, context) => {
    console.log("EVent.activities.parent: %j", parent)
  
    const activity = await context.prisma.event({ id: parent.id }).activities();
  
    console.log("Event.activities: %j", activity)
    
    return activity;
  };
  
  
  module.exports = {
    activities,
  };