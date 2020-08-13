/**
 * Do not edit this file it is auto-generated by italia-utils / gen-api-models.
 * See https://github.com/teamdigitale/italia-utils
 */
/* tslint:disable */

import { enumType } from "italia-ts-commons/lib/types";
import * as t from "io-ts";

export enum NotificationChannelEnum {
  "EMAIL" = "EMAIL",

  "WEBHOOK" = "WEBHOOK"
}

/**
 * All notification channels.
 */

export type NotificationChannel = t.TypeOf<typeof NotificationChannel>;
export const NotificationChannel = enumType<NotificationChannelEnum>(
  NotificationChannelEnum,
  "NotificationChannel"
);
