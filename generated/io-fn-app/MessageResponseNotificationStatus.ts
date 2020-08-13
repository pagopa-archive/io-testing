/**
 * Do not edit this file it is auto-generated by italia-utils / gen-api-models.
 * See https://github.com/teamdigitale/italia-utils
 */
/* tslint:disable */

import { NotificationChannelStatusValue } from "./NotificationChannelStatusValue";
import * as t from "io-ts";

// required attributes
const MessageResponseNotificationStatusR = t.interface({});

// optional attributes
const MessageResponseNotificationStatusO = t.partial({
  email: NotificationChannelStatusValue,

  webhook: NotificationChannelStatusValue
});

export const MessageResponseNotificationStatus = t.intersection(
  [MessageResponseNotificationStatusR, MessageResponseNotificationStatusO],
  "MessageResponseNotificationStatus"
);

export type MessageResponseNotificationStatus = t.TypeOf<
  typeof MessageResponseNotificationStatus
>;
