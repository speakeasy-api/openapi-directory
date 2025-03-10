<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Operations;

use \OpenAPI\OpenAPI\Utils\SpeakeasyMetadata;
class DeleteTransactionRequest
{
    /**
     * The id of the budget. "last-used" can be used to specify the last used budget and "default" can be used if default budget selection is enabled (see: https://api.ynab.com/#oauth-default-budget).
     * 
     * @var string $budgetId
     */
	#[SpeakeasyMetadata('pathParam:style=simple,explode=false,name=budget_id')]
    public string $budgetId;
    
    /**
     * The id of the transaction
     * 
     * @var string $transactionId
     */
	#[SpeakeasyMetadata('pathParam:style=simple,explode=false,name=transaction_id')]
    public string $transactionId;
    
	public function __construct()
	{
		$this->budgetId = "";
		$this->transactionId = "";
	}
}
