<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Operations;


enum CreateInvestorRootTypeForInvestorCreationResponseStatusEnum: string
{
    case KYC_PENDING = 'kyc_pending';
    case KYC_FAILED = 'kyc_failed';
    case INACTIVE = 'inactive';
    case ACTIVE = 'active';
}
