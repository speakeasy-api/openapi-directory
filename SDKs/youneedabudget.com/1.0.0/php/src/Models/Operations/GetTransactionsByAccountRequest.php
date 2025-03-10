<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Operations;

use \OpenAPI\OpenAPI\Utils\SpeakeasyMetadata;
class GetTransactionsByAccountRequest
{
    /**
     * The id of the account
     * 
     * @var string $accountId
     */
	#[SpeakeasyMetadata('pathParam:style=simple,explode=false,name=account_id')]
    public string $accountId;
    
    /**
     * The id of the budget. "last-used" can be used to specify the last used budget and "default" can be used if default budget selection is enabled (see: https://api.ynab.com/#oauth-default-budget).
     * 
     * @var string $budgetId
     */
	#[SpeakeasyMetadata('pathParam:style=simple,explode=false,name=budget_id')]
    public string $budgetId;
    
    /**
     * The starting server knowledge.  If provided, only entities that have changed since `last_knowledge_of_server` will be included.
     * 
     * @var ?int $lastKnowledgeOfServer
     */
	#[SpeakeasyMetadata('queryParam:style=form,explode=true,name=last_knowledge_of_server')]
    public ?int $lastKnowledgeOfServer = null;
    
    /**
     * If specified, only transactions on or after this date will be included.  The date should be ISO formatted (e.g. 2016-12-30).
     * 
     * @var ?\DateTime $sinceDate
     */
	#[SpeakeasyMetadata('queryParam:style=form,explode=true,name=since_date,dateTimeFormat=Y-m-d')]
    public ?\DateTime $sinceDate = null;
    
    /**
     * If specified, only transactions of the specified type will be included. "uncategorized" and "unapproved" are currently supported.
     * 
     * @var ?\OpenAPI\OpenAPI\Models\Operations\GetTransactionsByAccountTypeEnum $type
     */
	#[SpeakeasyMetadata('queryParam:style=form,explode=true,name=type')]
    public ?GetTransactionsByAccountTypeEnum $type = null;
    
	public function __construct()
	{
		$this->accountId = "";
		$this->budgetId = "";
		$this->lastKnowledgeOfServer = null;
		$this->sinceDate = null;
		$this->type = null;
	}
}
