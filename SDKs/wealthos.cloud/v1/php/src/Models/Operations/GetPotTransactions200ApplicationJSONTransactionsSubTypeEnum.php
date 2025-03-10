<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Operations;


/** Sub state of the transaction. instructed, confirmed, priced sub_types applicable for pending state and rejected, cancelled, settled sub_types applicable for archived state */
enum GetPotTransactions200ApplicationJSONTransactionsSubTypeEnum: string
{
    case INSTRUCTED = 'instructed';
    case CONFIRMED = 'confirmed';
    case PRICED = 'priced';
    case REJECTED = 'rejected';
    case SETTLED = 'settled';
    case CANCELLED = 'cancelled';
    case SCHEDULED = 'scheduled';
}
