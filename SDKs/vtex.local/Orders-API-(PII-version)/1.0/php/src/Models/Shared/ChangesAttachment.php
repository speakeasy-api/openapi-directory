<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Shared;


class ChangesAttachment
{
    /**
     * Array with data on order changes.
     * 
     * @var array<\OpenAPI\OpenAPI\Models\Shared\ChangesDatum> $changesData
     */
	#[\JMS\Serializer\Annotation\SerializedName('changesData')]
    #[\JMS\Serializer\Annotation\Type('array<OpenAPI\OpenAPI\Models\Shared\ChangesDatum>')]
    public array $changesData;
    
    /**
     * Change ID.
     * 
     * @var string $id
     */
	#[\JMS\Serializer\Annotation\SerializedName('id')]
    #[\JMS\Serializer\Annotation\Type('string')]
    public string $id;
    
	public function __construct()
	{
		$this->changesData = [];
		$this->id = "";
	}
}
