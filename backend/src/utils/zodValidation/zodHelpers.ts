import { z } from 'zod';

/**
 * @summary
 * Zod validation helper for BIT fields (0 or 1)
 *
 * @constant zBit
 * @module utils/zodValidation
 */
export const zBit = z.coerce.number().int().min(0).max(1);

/**
 * @summary
 * Zod validation helper for date strings
 *
 * @constant zDateString
 * @module utils/zodValidation
 */
export const zDateString = z.string().datetime();

/**
 * @summary
 * Zod validation helper for foreign key fields
 *
 * @constant zFK
 * @module utils/zodValidation
 */
export const zFK = z.coerce.number().int().positive();

/**
 * @summary
 * Zod validation helper for name fields
 *
 * @constant zName
 * @module utils/zodValidation
 */
export const zName = z.string().min(1).max(100);

/**
 * @summary
 * Zod validation helper for nullable description fields
 *
 * @constant zNullableDescription
 * @module utils/zodValidation
 */
export const zNullableDescription = z.string().max(500).nullable();

/**
 * @summary
 * Zod validation helper for nullable foreign key fields
 *
 * @constant zNullableFK
 * @module utils/zodValidation
 */
export const zNullableFK = z.coerce.number().int().positive().nullable();

/**
 * @summary
 * Zod validation helper for nullable string fields
 *
 * @function zNullableString
 * @module utils/zodValidation
 *
 * @param {number} [maxLength] - Maximum string length
 *
 * @returns {z.ZodNullable<z.ZodString>} Zod nullable string schema
 */
export const zNullableString = (maxLength?: number) => {
  let schema = z.string();
  if (maxLength) {
    schema = schema.max(maxLength);
  }
  return schema.nullable();
};

/**
 * @summary
 * Zod validation helper for required string fields
 *
 * @constant zString
 * @module utils/zodValidation
 */
export const zString = z.string().min(1);
