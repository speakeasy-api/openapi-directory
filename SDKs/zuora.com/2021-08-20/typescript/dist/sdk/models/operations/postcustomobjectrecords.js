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
exports.PostCustomObjectRecordsResponse = exports.PostCustomObjectRecordsRequest = exports.PostCustomObjectRecordsHeaders = exports.PostCustomObjectRecordsPathParams = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var PostCustomObjectRecordsPathParams = /** @class */ (function (_super) {
    __extends(PostCustomObjectRecordsPathParams, _super);
    function PostCustomObjectRecordsPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=object" }),
        __metadata("design:type", String)
    ], PostCustomObjectRecordsPathParams.prototype, "object", void 0);
    return PostCustomObjectRecordsPathParams;
}(utils_1.SpeakeasyBase));
exports.PostCustomObjectRecordsPathParams = PostCustomObjectRecordsPathParams;
var PostCustomObjectRecordsHeaders = /** @class */ (function (_super) {
    __extends(PostCustomObjectRecordsHeaders, _super);
    function PostCustomObjectRecordsHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=Authorization" }),
        __metadata("design:type", String)
    ], PostCustomObjectRecordsHeaders.prototype, "authorization", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=Zuora-Entity-Ids" }),
        __metadata("design:type", String)
    ], PostCustomObjectRecordsHeaders.prototype, "zuoraEntityIds", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=Zuora-Track-Id" }),
        __metadata("design:type", String)
    ], PostCustomObjectRecordsHeaders.prototype, "zuoraTrackId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=Zuora-Version" }),
        __metadata("design:type", Date)
    ], PostCustomObjectRecordsHeaders.prototype, "zuoraVersion", void 0);
    return PostCustomObjectRecordsHeaders;
}(utils_1.SpeakeasyBase));
exports.PostCustomObjectRecordsHeaders = PostCustomObjectRecordsHeaders;
var PostCustomObjectRecordsRequest = /** @class */ (function (_super) {
    __extends(PostCustomObjectRecordsRequest, _super);
    function PostCustomObjectRecordsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", PostCustomObjectRecordsPathParams)
    ], PostCustomObjectRecordsRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", PostCustomObjectRecordsHeaders)
    ], PostCustomObjectRecordsRequest.prototype, "headers", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.PostCustomObjectRecordsRequest)
    ], PostCustomObjectRecordsRequest.prototype, "request", void 0);
    return PostCustomObjectRecordsRequest;
}(utils_1.SpeakeasyBase));
exports.PostCustomObjectRecordsRequest = PostCustomObjectRecordsRequest;
var PostCustomObjectRecordsResponse = /** @class */ (function (_super) {
    __extends(PostCustomObjectRecordsResponse, _super);
    function PostCustomObjectRecordsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], PostCustomObjectRecordsResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.CustomObjectRecordsErrorResponse)
    ], PostCustomObjectRecordsResponse.prototype, "customObjectRecordsErrorResponse", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.CustomObjectRecordsThrottledResponse)
    ], PostCustomObjectRecordsResponse.prototype, "customObjectRecordsThrottledResponse", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.ErrorResponse401Record)
    ], PostCustomObjectRecordsResponse.prototype, "errorResponse401Record", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], PostCustomObjectRecordsResponse.prototype, "headers", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.PostCustomObjectRecordsResponse)
    ], PostCustomObjectRecordsResponse.prototype, "postCustomObjectRecordsResponse", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], PostCustomObjectRecordsResponse.prototype, "statusCode", void 0);
    return PostCustomObjectRecordsResponse;
}(utils_1.SpeakeasyBase));
exports.PostCustomObjectRecordsResponse = PostCustomObjectRecordsResponse;
