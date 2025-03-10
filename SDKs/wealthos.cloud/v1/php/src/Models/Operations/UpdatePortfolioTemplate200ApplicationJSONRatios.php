<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Operations;


class UpdatePortfolioTemplate200ApplicationJSONRatios
{
    /**
     * must be an investment product id or 'cash'
     * 
     * @var string $investmentProductId
     */
	#[\JMS\Serializer\Annotation\SerializedName('investment_product_id')]
    #[\JMS\Serializer\Annotation\Type('string')]
    public string $investmentProductId;
    
    /**
     * must be in correct pattern (eg: 25.00, 33.34, 50.25, 100.00)
     * 
     * @var string $ratio
     */
	#[\JMS\Serializer\Annotation\SerializedName('ratio')]
    #[\JMS\Serializer\Annotation\Type('string')]
    public string $ratio;
    
	public function __construct()
	{
		$this->investmentProductId = "";
		$this->ratio = "";
	}
}
