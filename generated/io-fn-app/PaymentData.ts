/**
 * Do not edit this file it is auto-generated by italia-utils / gen-api-models.
 * See https://github.com/teamdigitale/italia-utils
 */
/* tslint:disable */

import { withDefault } from "italia-ts-commons/lib/types";
import * as t from "io-ts";
import { WithinRangeInteger } from "italia-ts-commons/lib/numbers";
import { PatternString } from "italia-ts-commons/lib/strings";

/**
 * Metadata needed to process pagoPA payments.
 */

// required attributes
const PaymentDataR = t.interface({
  amount: WithinRangeInteger(1, 10000000000),

  notice_number: PatternString("^[0123][0-9]{17}$")
});

// optional attributes
const PaymentDataO = t.partial({
  invalid_after_due_date: withDefault(t.boolean, false)
});

export const PaymentData = t.intersection(
  [PaymentDataR, PaymentDataO],
  "PaymentData"
);

export type PaymentData = t.TypeOf<typeof PaymentData>;
