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
exports.DeleteChatMessageResponse = exports.DeleteChatMessageRequest = exports.DeleteChatMessageSecurity = exports.DeleteChatMessageQueryParams = exports.DeleteChatMessagePathParams = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var DeleteChatMessagePathParams = /** @class */ (function (_super) {
    __extends(DeleteChatMessagePathParams, _super);
    function DeleteChatMessagePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=messageId" }),
        __metadata("design:type", String)
    ], DeleteChatMessagePathParams.prototype, "messageId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=userId" }),
        __metadata("design:type", String)
    ], DeleteChatMessagePathParams.prototype, "userId", void 0);
    return DeleteChatMessagePathParams;
}(utils_1.SpeakeasyBase));
exports.DeleteChatMessagePathParams = DeleteChatMessagePathParams;
var DeleteChatMessageQueryParams = /** @class */ (function (_super) {
    __extends(DeleteChatMessageQueryParams, _super);
    function DeleteChatMessageQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=to_channel" }),
        __metadata("design:type", String)
    ], DeleteChatMessageQueryParams.prototype, "toChannel", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=to_contact" }),
        __metadata("design:type", String)
    ], DeleteChatMessageQueryParams.prototype, "toContact", void 0);
    return DeleteChatMessageQueryParams;
}(utils_1.SpeakeasyBase));
exports.DeleteChatMessageQueryParams = DeleteChatMessageQueryParams;
var DeleteChatMessageSecurity = /** @class */ (function (_super) {
    __extends(DeleteChatMessageSecurity, _super);
    function DeleteChatMessageSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOAuth)
    ], DeleteChatMessageSecurity.prototype, "oAuth", void 0);
    return DeleteChatMessageSecurity;
}(utils_1.SpeakeasyBase));
exports.DeleteChatMessageSecurity = DeleteChatMessageSecurity;
var DeleteChatMessageRequest = /** @class */ (function (_super) {
    __extends(DeleteChatMessageRequest, _super);
    function DeleteChatMessageRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", DeleteChatMessagePathParams)
    ], DeleteChatMessageRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", DeleteChatMessageQueryParams)
    ], DeleteChatMessageRequest.prototype, "queryParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", DeleteChatMessageSecurity)
    ], DeleteChatMessageRequest.prototype, "security", void 0);
    return DeleteChatMessageRequest;
}(utils_1.SpeakeasyBase));
exports.DeleteChatMessageRequest = DeleteChatMessageRequest;
var DeleteChatMessageResponse = /** @class */ (function (_super) {
    __extends(DeleteChatMessageResponse, _super);
    function DeleteChatMessageResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], DeleteChatMessageResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], DeleteChatMessageResponse.prototype, "statusCode", void 0);
    return DeleteChatMessageResponse;
}(utils_1.SpeakeasyBase));
exports.DeleteChatMessageResponse = DeleteChatMessageResponse;
