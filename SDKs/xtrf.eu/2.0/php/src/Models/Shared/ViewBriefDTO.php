<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Shared;


class ViewBriefDTO
{
	#[\JMS\Serializer\Annotation\SerializedName('access')]
    #[\JMS\Serializer\Annotation\Type('OpenAPI\OpenAPI\Models\Shared\AccessDTO')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?AccessDTO $access = null;
    
	#[\JMS\Serializer\Annotation\SerializedName('current')]
    #[\JMS\Serializer\Annotation\Type('bool')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?bool $current = null;
    
	#[\JMS\Serializer\Annotation\SerializedName('id')]
    #[\JMS\Serializer\Annotation\Type('int')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?int $id = null;
    
	#[\JMS\Serializer\Annotation\SerializedName('lastModification')]
    #[\JMS\Serializer\Annotation\Type('OpenAPI\OpenAPI\Models\Shared\LastModificationDTO')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?LastModificationDTO $lastModification = null;
    
	#[\JMS\Serializer\Annotation\SerializedName('mine')]
    #[\JMS\Serializer\Annotation\Type('bool')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?bool $mine = null;
    
	#[\JMS\Serializer\Annotation\SerializedName('name')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $name = null;
    
	#[\JMS\Serializer\Annotation\SerializedName('owner')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $owner = null;
    
	public function __construct()
	{
		$this->access = null;
		$this->current = null;
		$this->id = null;
		$this->lastModification = null;
		$this->mine = null;
		$this->name = null;
		$this->owner = null;
	}
}
