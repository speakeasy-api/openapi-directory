<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Shared;


/**
 * PoolEnableAutoScaleParameter - Parameters for a CloudPoolOperations.EnableAutoScale request.
 * 
 * @package OpenAPI\OpenAPI\Models\Shared
 * @access public
 */
class PoolEnableAutoScaleParameter
{
    /**
     * Gets or sets a time interval for the desired autoscale evaluation period in the pool.
     * 
     * @var ?string $autoScaleEvaluationInterval
     */
	#[\JMS\Serializer\Annotation\SerializedName('autoScaleEvaluationInterval')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $autoScaleEvaluationInterval = null;
    
    /**
     * Sets the formula for the desired number of compute nodes in the pool.
     * 
     * @var ?string $autoScaleFormula
     */
	#[\JMS\Serializer\Annotation\SerializedName('autoScaleFormula')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $autoScaleFormula = null;
    
	public function __construct()
	{
		$this->autoScaleEvaluationInterval = null;
		$this->autoScaleFormula = null;
	}
}
