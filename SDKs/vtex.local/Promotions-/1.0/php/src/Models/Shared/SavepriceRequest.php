<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Shared;


class SavepriceRequest
{
	#[\JMS\Serializer\Annotation\SerializedName('itemId')]
    #[\JMS\Serializer\Annotation\Type('int')]
    public int $itemId;
    
	#[\JMS\Serializer\Annotation\SerializedName('listPrice')]
    #[\JMS\Serializer\Annotation\Type('int')]
    public int $listPrice;
    
	#[\JMS\Serializer\Annotation\SerializedName('price')]
    #[\JMS\Serializer\Annotation\Type('int')]
    public int $price;
    
	#[\JMS\Serializer\Annotation\SerializedName('salesChannel')]
    #[\JMS\Serializer\Annotation\Type('int')]
    public int $salesChannel;
    
	#[\JMS\Serializer\Annotation\SerializedName('sellerId')]
    #[\JMS\Serializer\Annotation\Type('int')]
    public int $sellerId;
    
	#[\JMS\Serializer\Annotation\SerializedName('validFrom')]
    #[\JMS\Serializer\Annotation\Type('string')]
    public string $validFrom;
    
	#[\JMS\Serializer\Annotation\SerializedName('validTo')]
    #[\JMS\Serializer\Annotation\Type('string')]
    public string $validTo;
    
	public function __construct()
	{
		$this->itemId = 0;
		$this->listPrice = 0;
		$this->price = 0;
		$this->salesChannel = 0;
		$this->sellerId = 0;
		$this->validFrom = "";
		$this->validTo = "";
	}
}
