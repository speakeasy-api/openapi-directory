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
exports.CreateRebalanceResponse = exports.CreateRebalanceRequest = exports.CreateRebalanceSecurity = exports.CreateRebalanceSwitchInstructionRequest = exports.CreateRebalanceSwitchInstructionRequestTypeEnum = exports.CreateRebalanceHeaders = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var CreateRebalanceHeaders = /** @class */ (function (_super) {
    __extends(CreateRebalanceHeaders, _super);
    function CreateRebalanceHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=x-api-key" }),
        __metadata("design:type", String)
    ], CreateRebalanceHeaders.prototype, "xApiKey", void 0);
    return CreateRebalanceHeaders;
}(utils_1.SpeakeasyBase));
exports.CreateRebalanceHeaders = CreateRebalanceHeaders;
var CreateRebalanceSwitchInstructionRequestTypeEnum;
(function (CreateRebalanceSwitchInstructionRequestTypeEnum) {
    CreateRebalanceSwitchInstructionRequestTypeEnum["Pot"] = "pot";
    CreateRebalanceSwitchInstructionRequestTypeEnum["Investor"] = "investor";
    CreateRebalanceSwitchInstructionRequestTypeEnum["Portfolio"] = "portfolio";
})(CreateRebalanceSwitchInstructionRequestTypeEnum = exports.CreateRebalanceSwitchInstructionRequestTypeEnum || (exports.CreateRebalanceSwitchInstructionRequestTypeEnum = {}));
// CreateRebalanceSwitchInstructionRequest
/**
 * Definition of Switch instruction
**/
var CreateRebalanceSwitchInstructionRequest = /** @class */ (function (_super) {
    __extends(CreateRebalanceSwitchInstructionRequest, _super);
    function CreateRebalanceSwitchInstructionRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=request_id" }),
        __metadata("design:type", String)
    ], CreateRebalanceSwitchInstructionRequest.prototype, "requestId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], CreateRebalanceSwitchInstructionRequest.prototype, "type", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=values" }),
        __metadata("design:type", Array)
    ], CreateRebalanceSwitchInstructionRequest.prototype, "values", void 0);
    return CreateRebalanceSwitchInstructionRequest;
}(utils_1.SpeakeasyBase));
exports.CreateRebalanceSwitchInstructionRequest = CreateRebalanceSwitchInstructionRequest;
var CreateRebalanceSecurity = /** @class */ (function (_super) {
    __extends(CreateRebalanceSecurity, _super);
    function CreateRebalanceSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeApiSecretKey)
    ], CreateRebalanceSecurity.prototype, "apiSecretKey", void 0);
    return CreateRebalanceSecurity;
}(utils_1.SpeakeasyBase));
exports.CreateRebalanceSecurity = CreateRebalanceSecurity;
var CreateRebalanceRequest = /** @class */ (function (_super) {
    __extends(CreateRebalanceRequest, _super);
    function CreateRebalanceRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", CreateRebalanceHeaders)
    ], CreateRebalanceRequest.prototype, "headers", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=application/json" }),
        __metadata("design:type", CreateRebalanceSwitchInstructionRequest)
    ], CreateRebalanceRequest.prototype, "request", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", CreateRebalanceSecurity)
    ], CreateRebalanceRequest.prototype, "security", void 0);
    return CreateRebalanceRequest;
}(utils_1.SpeakeasyBase));
exports.CreateRebalanceRequest = CreateRebalanceRequest;
var CreateRebalanceResponse = /** @class */ (function (_super) {
    __extends(CreateRebalanceResponse, _super);
    function CreateRebalanceResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], CreateRebalanceResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], CreateRebalanceResponse.prototype, "createRebalance201ApplicationJSONAny", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], CreateRebalanceResponse.prototype, "createRebalance400ApplicationJSONAny", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], CreateRebalanceResponse.prototype, "createRebalance401ApplicationJSONAny", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], CreateRebalanceResponse.prototype, "createRebalance403ApplicationJSONAny", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], CreateRebalanceResponse.prototype, "createRebalance404ApplicationJSONAny", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], CreateRebalanceResponse.prototype, "createRebalance409ApplicationJSONAny", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], CreateRebalanceResponse.prototype, "createRebalance429ApplicationJSONAny", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], CreateRebalanceResponse.prototype, "createRebalance500ApplicationJSONAny", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], CreateRebalanceResponse.prototype, "statusCode", void 0);
    return CreateRebalanceResponse;
}(utils_1.SpeakeasyBase));
exports.CreateRebalanceResponse = CreateRebalanceResponse;
