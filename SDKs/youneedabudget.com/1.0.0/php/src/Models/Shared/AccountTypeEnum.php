<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Shared;


/** The type of account */
enum AccountTypeEnum: string
{
    case CHECKING = 'checking';
    case SAVINGS = 'savings';
    case CASH = 'cash';
    case CREDIT_CARD = 'creditCard';
    case LINE_OF_CREDIT = 'lineOfCredit';
    case OTHER_ASSET = 'otherAsset';
    case OTHER_LIABILITY = 'otherLiability';
    case MORTGAGE = 'mortgage';
    case AUTO_LOAN = 'autoLoan';
    case STUDENT_LOAN = 'studentLoan';
    case PERSONAL_LOAN = 'personalLoan';
    case MEDICAL_DEBT = 'medicalDebt';
    case OTHER_DEBT = 'otherDebt';
}
