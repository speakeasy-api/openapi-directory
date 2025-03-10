<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Operations;


/**
 * ExecuteSellTrasactionSellTransactionRequest - Definition of an sell transaction request
 * 
 * @package OpenAPI\OpenAPI\Models\Operations
 * @access public
 */
class ExecuteSellTrasactionSellTransactionRequest
{
	#[\JMS\Serializer\Annotation\SerializedName('pot_id')]
    #[\JMS\Serializer\Annotation\Type('string')]
    public string $potId;
    
    /**
     * Unique request id to ensure idempotency. (ex: UUID)
     * 
     * @var string $requestId
     */
	#[\JMS\Serializer\Annotation\SerializedName('request_id')]
    #[\JMS\Serializer\Annotation\Type('string')]
    public string $requestId;
    
    /**
     * $sellInstructions
     * 
     * @var array<\OpenAPI\OpenAPI\Models\Operations\ExecuteSellTrasactionSellTransactionRequestInstructionBuySell> $sellInstructions
     */
	#[\JMS\Serializer\Annotation\SerializedName('sell_instructions')]
    #[\JMS\Serializer\Annotation\Type('array<OpenAPI\OpenAPI\Models\Operations\ExecuteSellTrasactionSellTransactionRequestInstructionBuySell>')]
    public array $sellInstructions;
    
	public function __construct()
	{
		$this->potId = "";
		$this->requestId = "";
		$this->sellInstructions = [];
	}
}
