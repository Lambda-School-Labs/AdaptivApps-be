// @ts-check

/**
 * @param {{ data: import('../generated/prisma-client').ProfileCreateInput }} args
 * @param {{ prisma: import('../generated/prisma-client').Prisma }} context
 * @returns { Promise }
 */
const createProfile = async (_, args, context) => {
  // Creates a profile based on args data
  const profile = context.prisma.createProfile(args.data);
  // This next line ensures user needs to be logged in, else return error
  const user = await context.user;

  return profile;
};

/**
 * @param {{ data: import('../generated/prisma-client').ProfileUpdateInput, where: import('../generated/prisma-client').ProfileWhereUniqueInput }} args
 * @param {{ prisma: import('../generated/prisma-client').Prisma }} context
 * @returns { Promise }
 */
const updateProfile = async (_, args, context) => {
  console.log('updateProfile.args: %j', args);
  // Updates a profile with args passed in
  const profile = context.prisma.updateProfile(args);
  // This next line ensures user needs to be logged in, else return error
  const user = await context.user;

  return profile;
};

/**
 * @param {{ where: import('../generated/prisma-client').ProfileWhereUniqueInput }} args
 * @param {{ prisma: import('../generated/prisma-client').Prisma }} context
 * @returns { Promise }
 */
const deleteProfile = async (_, args, context) => {
  // Deletes a profile with args passed in
  const profile = context.prisma.deleteProfile(args.where);
  // This next line ensures user needs to be logged in, else return error
  const user = await context.user;

  return profile;
};

/* ------------------------ EVENTS MUTATION ---------------------*/

// @ts-check

/**
 * @param {{ data: import('../generated/prisma-client').EventCreateInput }} args
 * @param {{ prisma: import('../generated/prisma-client').Prisma }} context
 * @returns { Promise }
 */
const createEvent = async (_, args, context) => {
  // Creates a profile based on args data
  const event = context.prisma.createEvent(args.data);
  // This next line ensures user needs to be logged in, else return error
  const user = await context.user;

  return event;
};

/**
 * @param {{ data: import('../generated/prisma-client').EventUpdateInput, where: import('../generated/prisma-client').EventWhereUniqueInput }} args
 * @param {{ prisma: import('../generated/prisma-client').Prisma }} context
 * @returns { Promise }
 */
const updateEvent = async (_, args, context) => {
  console.log('updateProfile.args: %j', args);
  // Updates an event with args passed in
  const event = context.prisma.updateEvent(args);
  // This next line ensures user needs to be logged in, else return error
  const user = await context.user;

  return event;
};

/**
 * @param {{ where: import('../generated/prisma-client').EventWhereUniqueInput }} args
 * @param {{ prisma: import('../generated/prisma-client').Prisma }} context
 * @returns { Promise }
 */
const deleteEvent = async (_, args, context) => {
  // Deletes an Event with args passed in
  const event = context.prisma.deleteEvent(args.where);
  // This next line ensures user needs to be logged in, else return error
  const user = await context.user;

  return event;
};


/* ------------------ Activity Mutations --------------- */
// @ts-check

/**
 * @param {{ data: import('../generated/prisma-client').ActivityCreateInput }} args
 * @param {{ prisma: import('../generated/prisma-client').Prisma }} context
 * @returns { Promise }
 */
const createActivity = async (_, args, context) => {
  // Creates a profile based on args data
  const activity = context.prisma.createActivity(args.data);
  // This next line ensures user needs to be logged in, else return error
  const user = await context.user;

  return activity;
};
/**
 * @param {{ data: import('../generated/prisma-client').ActivityUpdateInput, where: import('../generated/prisma-client').ActivityWhereUniqueInput }} args
 * @param {{ prisma: import('../generated/prisma-client').Prisma }} context
 * @returns { Promise }
 */
const updateActivity = async (_, args, context) => {
 // console.log('updateProfile.args: %j', args);
  // Updates an activity with args passed in
  const activity = context.prisma.updateActivity(args);
  // This next line ensures user needs to be logged in, else return error
  const user = await context.user;

  return activity;
};

/**
 * @param {{ where: import('../generated/prisma-client').ActivityWhereUniqueInput }} args
 * @param {{ prisma: import('../generated/prisma-client').Prisma }} context
 * @returns { Promise }
 */
const deleteActivity = async (_, args, context) => {
  // Deletes an Activity with args passed in
  const activity = context.prisma.deleteActivity(args.where);
  // This next line ensures user needs to be logged in, else return error
  const user = await context.user;

  return activity;
};

module.exports = {
  createProfile,
  updateProfile,
  deleteProfile,
  createEvent,
  updateEvent,
  deleteEvent,
  createActivity,
  updateActivity,
  deleteActivity
};
