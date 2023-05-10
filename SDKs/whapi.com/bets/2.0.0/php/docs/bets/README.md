# bets

### Available Operations

* [cashin](#cashin) - Allows a trusted application to cash in a bet (take a return on a bet) on behalf of the customer
* [getBetHistory](#getbethistory) - Retrieves the customer’s bet history.
* [getFreeBets](#getfreebets) - Returns available free bets
* [placeComplexBet](#placecomplexbet) - Places a multiple or a complex bet.
* [placeSingleBet](#placesinglebet) - Places a single bet
* [validateBetslip](#validatebetslip) - Organises the betslip when one or more selections are made. It returns a bet slip structure organised by betting opportunities.

## cashin

Allows a trusted application to cash in a bet (take a return on a bet) on behalf of the customer. If the customers monitor bets they can cash in a bet at any point before the event ends.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CashinRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CashinRequest();
    $request->apiKey = 'corrupti';
    $request->apiSecret = 'illum';
    $request->apiTicket = 'vel';
    $request->betId = 'error';
    $request->cashInValue = 6458.94;
    $request->cashinBetDelayId = 'suscipit';

    $response = $sdk->bets->cashin($request);

    if ($response->cashInResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getBetHistory

Retrieves the customer’s bet history. Options are available to organise the history in terms of date, bet type and settled and unsettled bets. The maximum number of bets and bet history pages retrieved can also be set.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetBetHistoryRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetBetHistoryRequest();
    $request->apiKey = 'iure';
    $request->apiSecret = 'magnam';
    $request->apiTicket = 'debitis';
    $request->dateFrom = 'ipsa';
    $request->dateTo = 'delectus';
    $request->exclude = [
        'suscipit',
        'molestiae',
    ];
    $request->fields = [
        'placeat',
        'voluptatum',
        'iusto',
        'excepturi',
    ];
    $request->include = [
        'recusandae',
        'temporibus',
    ];
    $request->page = 710.36;
    $request->pageSize = 3373.96;
    $request->settled = false;
    $request->sort = 'veritatis';

    $response = $sdk->bets->getBetHistory($request);

    if ($response->betHistoryResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getFreeBets

Retrieves the current free bets available for a customer.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetFreeBetsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetFreeBetsRequest();
    $request->apiKey = 'deserunt';
    $request->apiSecret = 'perferendis';
    $request->apiTicket = 'ipsam';
    $request->exclude = [
        'sapiente',
        'quo',
        'odit',
        'at',
    ];
    $request->fields = [
        'maiores',
        'molestiae',
        'quod',
        'quod',
    ];
    $request->include = [
        'totam',
        'porro',
    ];

    $response = $sdk->bets->getFreeBets($request);

    if ($response->freeBet !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## placeComplexBet

Places a multiple or a complex bet.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PlaceComplexBetRequest;
use \OpenAPI\OpenAPI\Models\Shared\ComplexBetRequestBody;
use \OpenAPI\OpenAPI\Models\Shared\Bet;
use \OpenAPI\OpenAPI\Models\Shared\Leg;
use \OpenAPI\OpenAPI\Models\Shared\Part;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PlaceComplexBetRequest();
    $request->apiKey = 'dolorum';
    $request->apiSecret = 'dicta';
    $request->apiTicket = 'nam';
    $request->complexBetRequestBody = new ComplexBetRequestBody();
    $request->complexBetRequestBody->bets = [
        new Bet(),
        new Bet(),
        new Bet(),
    ];
    $request->exclude = [
        'fugit',
        'deleniti',
        'hic',
    ];
    $request->fields = [
        'totam',
        'beatae',
        'commodi',
        'molestiae',
    ];
    $request->include = [
        'qui',
        'impedit',
    ];

    $response = $sdk->bets->placeComplexBet($request);

    if ($response->betPlacedResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## placeSingleBet

Places a single bet. When placing a single bet using live inplay bets, the system might generate a bet delay to allow a time margin to negate the effects of major changes (for example, goals) to the market. Note that the amount of bet delay will vary by category and event type. A delayedBetId will be recieved that can be used to resubmit the bet.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PlaceSingleBetRequest;
use \OpenAPI\OpenAPI\Models\Shared\SingleBetRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PlaceSingleBetRequest();
    $request->apiKey = 'cum';
    $request->apiSecret = 'esse';
    $request->apiTicket = 'ipsum';
    $request->exclude = [
        'aspernatur',
        'perferendis',
        'ad',
    ];
    $request->fields = [
        'sed',
        'iste',
        'dolor',
    ];
    $request->include = [
        'laboriosam',
        'hic',
        'saepe',
    ];
    $request->singleBetRequestBody = new SingleBetRequestBody();
    $request->singleBetRequestBody->delayedBetId = 'fuga';
    $request->singleBetRequestBody->freeBetId = 'in';
    $request->singleBetRequestBody->priceDen = 359508;
    $request->singleBetRequestBody->priceNum = 613064;
    $request->singleBetRequestBody->priceType = 'iure';
    $request->singleBetRequestBody->selectionId = 'saepe';
    $request->singleBetRequestBody->stake = 6976.31;
    $request->singleBetRequestBody->type = 'architecto';

    $response = $sdk->bets->placeSingleBet($request);

    if ($response->betPlacedResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## validateBetslip

Organises the betslip when one or more selections are made. It returns a bet slip structure organised by betting opportunities.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ValidateBetslipRequest;
use \OpenAPI\OpenAPI\Models\Shared\BetSlipRequest;
use \OpenAPI\OpenAPI\Models\Shared\Leg;
use \OpenAPI\OpenAPI\Models\Shared\Part;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ValidateBetslipRequest();
    $request->apiKey = 'ipsa';
    $request->apiSecret = 'reiciendis';
    $request->betSlipRequest = new BetSlipRequest();
    $request->betSlipRequest->legs = [
        new Leg(),
        new Leg(),
        new Leg(),
    ];
    $request->expanded = 'mollitia';

    $response = $sdk->bets->validateBetslip($request);

    if ($response->betSlipResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
