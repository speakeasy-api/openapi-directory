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
exports.ListDistributedVirtualSwitchesResponse = exports.ListDistributedVirtualSwitchesRequest = exports.ListDistributedVirtualSwitchesSecurity = exports.ListDistributedVirtualSwitchesQueryParams = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var ListDistributedVirtualSwitchesQueryParams = /** @class */ (function (_super) {
    __extends(ListDistributedVirtualSwitchesQueryParams, _super);
    function ListDistributedVirtualSwitchesQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=cursor" }),
        __metadata("design:type", String)
    ], ListDistributedVirtualSwitchesQueryParams.prototype, "cursor", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=end_time" }),
        __metadata("design:type", Number)
    ], ListDistributedVirtualSwitchesQueryParams.prototype, "endTime", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=size" }),
        __metadata("design:type", Number)
    ], ListDistributedVirtualSwitchesQueryParams.prototype, "size", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=start_time" }),
        __metadata("design:type", Number)
    ], ListDistributedVirtualSwitchesQueryParams.prototype, "startTime", void 0);
    return ListDistributedVirtualSwitchesQueryParams;
}(utils_1.SpeakeasyBase));
exports.ListDistributedVirtualSwitchesQueryParams = ListDistributedVirtualSwitchesQueryParams;
var ListDistributedVirtualSwitchesSecurity = /** @class */ (function (_super) {
    __extends(ListDistributedVirtualSwitchesSecurity, _super);
    function ListDistributedVirtualSwitchesSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeApiKeyAuth)
    ], ListDistributedVirtualSwitchesSecurity.prototype, "apiKeyAuth", void 0);
    return ListDistributedVirtualSwitchesSecurity;
}(utils_1.SpeakeasyBase));
exports.ListDistributedVirtualSwitchesSecurity = ListDistributedVirtualSwitchesSecurity;
var ListDistributedVirtualSwitchesRequest = /** @class */ (function (_super) {
    __extends(ListDistributedVirtualSwitchesRequest, _super);
    function ListDistributedVirtualSwitchesRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", ListDistributedVirtualSwitchesQueryParams)
    ], ListDistributedVirtualSwitchesRequest.prototype, "queryParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", ListDistributedVirtualSwitchesSecurity)
    ], ListDistributedVirtualSwitchesRequest.prototype, "security", void 0);
    return ListDistributedVirtualSwitchesRequest;
}(utils_1.SpeakeasyBase));
exports.ListDistributedVirtualSwitchesRequest = ListDistributedVirtualSwitchesRequest;
var ListDistributedVirtualSwitchesResponse = /** @class */ (function (_super) {
    __extends(ListDistributedVirtualSwitchesResponse, _super);
    function ListDistributedVirtualSwitchesResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.ApiError)
    ], ListDistributedVirtualSwitchesResponse.prototype, "apiError", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], ListDistributedVirtualSwitchesResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.PagedListResponseWithTime)
    ], ListDistributedVirtualSwitchesResponse.prototype, "pagedListResponseWithTime", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], ListDistributedVirtualSwitchesResponse.prototype, "statusCode", void 0);
    return ListDistributedVirtualSwitchesResponse;
}(utils_1.SpeakeasyBase));
exports.ListDistributedVirtualSwitchesResponse = ListDistributedVirtualSwitchesResponse;
