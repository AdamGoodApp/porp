import { pgTable, varchar, boolean, timestamp, jsonb, integer } from "drizzle-orm/pg-core";

export const shipmentsTable = pgTable("shipments", {
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
  status: varchar("status", { length: 50 }).notNull(),
  cargo: jsonb("cargo").notNull(),
  autoTrackingStatus: varchar("autoTrackingStatus", { length: 50 }).notNull(),
  cancelledAt: timestamp("cancelledAt"),
  customerReference: varchar("customerReference", { length: 255 }),
  houseBlConsignee: jsonb("houseBlConsignee"),
  houseBlShipper: jsonb("houseBlShipper"),
  label: jsonb("label"),
  responsibilityType: varchar("responsibilityType", { length: 50 }).notNull(),
  tradeDirection: varchar("tradeDirection", { length: 50 }).notNull(),
  urgencyLevel: varchar("urgencyLevel", { length: 50 }).notNull(),
  transshipPorts: jsonb("transshipPorts"),
  pol: jsonb("pol"),
  pod: jsonb("pod"),
  freetimeLimitDate: timestamp("freetimeLimitDate"),
  dem: integer("dem"),
  det: integer("det"),
  assignedPartners: jsonb("assignedPartners"),
  internalAssignees: jsonb("internalAssignees"),
  assignedPartnerTeams: jsonb("assignedPartnerTeams"),
  totalUnreadMessageCount: integer("totalUnreadMessageCount").notNull(),
  handledBySimpleOperations: boolean("handledBySimpleOperations").notNull(),
});