"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExecuteSellTrasactionResponse = exports.ExecuteSellTrasactionRequest = exports.ExecuteSellTrasactionSecurity = exports.ExecuteSellTrasactionSellTransactionRequest = exports.ExecuteSellTrasactionSellTransactionRequestInstructionBuySell = exports.ExecuteSellTrasactionHeaders = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var ExecuteSellTrasactionHeaders = /** @class */ (function (_super) {
    __extends(ExecuteSellTrasactionHeaders, _super);
    function ExecuteSellTrasactionHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=x-api-key" }),
        __metadata("design:type", String)
    ], ExecuteSellTrasactionHeaders.prototype, "xApiKey", void 0);
    return ExecuteSellTrasactionHeaders;
}(utils_1.SpeakeasyBase));
exports.ExecuteSellTrasactionHeaders = ExecuteSellTrasactionHeaders;
// ExecuteSellTrasactionSellTransactionRequestInstructionBuySell
/**
 * Definition of an single instruction(buy|sell)
**/
var ExecuteSellTrasactionSellTransactionRequestInstructionBuySell = /** @class */ (function (_super) {
    __extends(ExecuteSellTrasactionSellTransactionRequestInstructionBuySell, _super);
    function ExecuteSellTrasactionSellTransactionRequestInstructionBuySell() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=client_order_id" }),
        __metadata("design:type", String)
    ], ExecuteSellTrasactionSellTransactionRequestInstructionBuySell.prototype, "clientOrderId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=investment_product_id" }),
        __metadata("design:type", String)
    ], ExecuteSellTrasactionSellTransactionRequestInstructionBuySell.prototype, "investmentProductId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=quantity" }),
        __metadata("design:type", String)
    ], ExecuteSellTrasactionSellTransactionRequestInstructionBuySell.prototype, "quantity", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=value" }),
        __metadata("design:type", String)
    ], ExecuteSellTrasactionSellTransactionRequestInstructionBuySell.prototype, "value", void 0);
    return ExecuteSellTrasactionSellTransactionRequestInstructionBuySell;
}(utils_1.SpeakeasyBase));
exports.ExecuteSellTrasactionSellTransactionRequestInstructionBuySell = ExecuteSellTrasactionSellTransactionRequestInstructionBuySell;
// ExecuteSellTrasactionSellTransactionRequest
/**
 * Definition of an sell transaction request
**/
var ExecuteSellTrasactionSellTransactionRequest = /** @class */ (function (_super) {
    __extends(ExecuteSellTrasactionSellTransactionRequest, _super);
    function ExecuteSellTrasactionSellTransactionRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=pot_id" }),
        __metadata("design:type", String)
    ], ExecuteSellTrasactionSellTransactionRequest.prototype, "potId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=request_id" }),
        __metadata("design:type", String)
    ], ExecuteSellTrasactionSellTransactionRequest.prototype, "requestId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=sell_instructions", elemType: ExecuteSellTrasactionSellTransactionRequestInstructionBuySell }),
        __metadata("design:type", Array)
    ], ExecuteSellTrasactionSellTransactionRequest.prototype, "sellInstructions", void 0);
    return ExecuteSellTrasactionSellTransactionRequest;
}(utils_1.SpeakeasyBase));
exports.ExecuteSellTrasactionSellTransactionRequest = ExecuteSellTrasactionSellTransactionRequest;
var ExecuteSellTrasactionSecurity = /** @class */ (function (_super) {
    __extends(ExecuteSellTrasactionSecurity, _super);
    function ExecuteSellTrasactionSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeApiSecretKey)
    ], ExecuteSellTrasactionSecurity.prototype, "apiSecretKey", void 0);
    return ExecuteSellTrasactionSecurity;
}(utils_1.SpeakeasyBase));
exports.ExecuteSellTrasactionSecurity = ExecuteSellTrasactionSecurity;
var ExecuteSellTrasactionRequest = /** @class */ (function (_super) {
    __extends(ExecuteSellTrasactionRequest, _super);
    function ExecuteSellTrasactionRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", ExecuteSellTrasactionHeaders)
    ], ExecuteSellTrasactionRequest.prototype, "headers", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=application/json" }),
        __metadata("design:type", ExecuteSellTrasactionSellTransactionRequest)
    ], ExecuteSellTrasactionRequest.prototype, "request", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", ExecuteSellTrasactionSecurity)
    ], ExecuteSellTrasactionRequest.prototype, "security", void 0);
    return ExecuteSellTrasactionRequest;
}(utils_1.SpeakeasyBase));
exports.ExecuteSellTrasactionRequest = ExecuteSellTrasactionRequest;
var ExecuteSellTrasactionResponse = /** @class */ (function (_super) {
    __extends(ExecuteSellTrasactionResponse, _super);
    function ExecuteSellTrasactionResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], ExecuteSellTrasactionResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], ExecuteSellTrasactionResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], ExecuteSellTrasactionResponse.prototype, "executeSellTrasaction200ApplicationJSONAny", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], ExecuteSellTrasactionResponse.prototype, "executeSellTrasaction400ApplicationJSONAny", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], ExecuteSellTrasactionResponse.prototype, "executeSellTrasaction401ApplicationJSONAny", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], ExecuteSellTrasactionResponse.prototype, "executeSellTrasaction403ApplicationJSONAny", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], ExecuteSellTrasactionResponse.prototype, "executeSellTrasaction404ApplicationJSONAny", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], ExecuteSellTrasactionResponse.prototype, "executeSellTrasaction409ApplicationJSONAny", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], ExecuteSellTrasactionResponse.prototype, "executeSellTrasaction429ApplicationJSONAny", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], ExecuteSellTrasactionResponse.prototype, "executeSellTrasaction500ApplicationJSONAny", void 0);
    return ExecuteSellTrasactionResponse;
}(utils_1.SpeakeasyBase));
exports.ExecuteSellTrasactionResponse = ExecuteSellTrasactionResponse;
