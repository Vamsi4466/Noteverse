import { v } from "convex/values";
import { mutation, query } from "./_generated/server";

// Create a file
export const createFile = mutation({
  args: {
    fileName: v.string(),
    teamId: v.string(),
    createdBy: v.string(),
    archive: v.boolean(),
    document: v.string(),
    whiteboard: v.string(),
  },
  handler: async (ctx, args) => {
    return await ctx.db.insert("files", args);
  },
});

// Get files by team
export const getFiles = query({
  args: { teamId: v.string() },
  handler: async (ctx, args) => {
    return ctx.db
      .query("files")
      .filter((q) => q.eq(q.field("teamId"), args.teamId))
      .order("desc")
      .collect();
  },
});

// Update document
export const updateDocument = mutation({
  args: { _id: v.id("files"), document: v.string() },
  handler: async (ctx, args) => {
    return await ctx.db.patch(args._id, { document: args.document });
  },
});

// Update whiteboard
export const updateWhiteboard = mutation({
  args: { _id: v.id("files"), whiteboard: v.string() },
  handler: async (ctx, args) => {
    return await ctx.db.patch(args._id, { whiteboard: args.whiteboard });
  },
});

// Get file by ID
export const getFileById = query({
  args: { _id: v.id("files") },
  handler: async (ctx, args) => {
    return await ctx.db.get(args._id);
  },
});

// Rename file
export const renameFile = mutation({
  args: { fileId: v.id("files"), newName: v.string() },
  handler: async (ctx, args) => {
    await ctx.db.patch(args.fileId, { fileName: args.newName });
    return true;
  },
});

// Delete file
export const deleteFile = mutation({
  args: { fileId: v.id("files") },
  handler: async (ctx, args) => {
    await ctx.db.delete(args.fileId);
    return true;
  },
});

// Update shared users
export const updateFileUsers = mutation({
  args: { fileId: v.id("files"), emails: v.array(v.string()) },
  handler: async (ctx, args) => {
    await ctx.db.patch(args.fileId, { sharedWith: args.emails });
    return true;
  },
});


