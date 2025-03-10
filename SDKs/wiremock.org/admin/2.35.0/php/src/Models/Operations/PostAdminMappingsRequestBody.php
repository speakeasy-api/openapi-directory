<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Operations;


class PostAdminMappingsRequestBody
{
    /**
     * This stub mapping's unique identifier
     * 
     * @var ?string $id
     */
	#[\JMS\Serializer\Annotation\SerializedName('id')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $id = null;
    
    /**
     * Arbitrary metadata to be used for e.g. tagging, documentation. Can also be used to find and remove stubs.
     * 
     * @var ?array<string, mixed> $metadata
     */
	#[\JMS\Serializer\Annotation\SerializedName('metadata')]
    #[\JMS\Serializer\Annotation\Type('array<string, mixed>')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?array $metadata = null;
    
    /**
     * The stub mapping's name
     * 
     * @var ?string $name
     */
	#[\JMS\Serializer\Annotation\SerializedName('name')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $name = null;
    
    /**
     * The new state for the scenario to be updated to after this stub is served.
     * 
     * @var ?string $newScenarioState
     */
	#[\JMS\Serializer\Annotation\SerializedName('newScenarioState')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $newScenarioState = null;
    
    /**
     * Indicates that the stub mapping should be persisted immediately on create/update/delete and survive resets to default.
     * 
     * @var ?bool $persistent
     */
	#[\JMS\Serializer\Annotation\SerializedName('persistent')]
    #[\JMS\Serializer\Annotation\Type('bool')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?bool $persistent = null;
    
    /**
     * A map of the names of post serve action extensions to trigger and their parameters.
     * 
     * @var ?array<string, mixed> $postServeActions
     */
	#[\JMS\Serializer\Annotation\SerializedName('postServeActions')]
    #[\JMS\Serializer\Annotation\Type('array<string, mixed>')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?array $postServeActions = null;
    
    /**
     * This stub mapping's priority relative to others. 1 is highest.
     * 
     * @var ?int $priority
     */
	#[\JMS\Serializer\Annotation\SerializedName('priority')]
    #[\JMS\Serializer\Annotation\Type('int')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?int $priority = null;
    
	#[\JMS\Serializer\Annotation\SerializedName('request')]
    #[\JMS\Serializer\Annotation\Type('OpenAPI\OpenAPI\Models\Operations\PostAdminMappingsRequestBodyRequest')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?PostAdminMappingsRequestBodyRequest $request = null;
    
    /**
     * The required state of the scenario in order for this stub to be matched.
     * 
     * @var ?string $requiredScenarioState
     */
	#[\JMS\Serializer\Annotation\SerializedName('requiredScenarioState')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $requiredScenarioState = null;
    
	#[\JMS\Serializer\Annotation\SerializedName('response')]
    #[\JMS\Serializer\Annotation\Type('OpenAPI\OpenAPI\Models\Operations\PostAdminMappingsRequestBodyResponse')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?PostAdminMappingsRequestBodyResponse $response = null;
    
    /**
     * The name of the scenario that this stub mapping is part of
     * 
     * @var ?string $scenarioName
     */
	#[\JMS\Serializer\Annotation\SerializedName('scenarioName')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $scenarioName = null;
    
    /**
     * Alias for the id
     * 
     * @var ?string $uuid
     */
	#[\JMS\Serializer\Annotation\SerializedName('uuid')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $uuid = null;
    
	public function __construct()
	{
		$this->id = null;
		$this->metadata = null;
		$this->name = null;
		$this->newScenarioState = null;
		$this->persistent = null;
		$this->postServeActions = null;
		$this->priority = null;
		$this->request = null;
		$this->requiredScenarioState = null;
		$this->response = null;
		$this->scenarioName = null;
		$this->uuid = null;
	}
}
