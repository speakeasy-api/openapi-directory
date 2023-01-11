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
exports.UserApiGetMessagesResponse = exports.UserApiGetMessagesRequest = exports.UserApiGetMessagesQueryParams = exports.UserApiGetMessagesInboxEnum = exports.UserApiGetMessagesPathParams = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var UserApiGetMessagesPathParams = /** @class */ (function (_super) {
    __extends(UserApiGetMessagesPathParams, _super);
    function UserApiGetMessagesPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=id" }),
        __metadata("design:type", Number)
    ], UserApiGetMessagesPathParams.prototype, "id", void 0);
    return UserApiGetMessagesPathParams;
}(utils_1.SpeakeasyBase));
exports.UserApiGetMessagesPathParams = UserApiGetMessagesPathParams;
var UserApiGetMessagesInboxEnum;
(function (UserApiGetMessagesInboxEnum) {
    UserApiGetMessagesInboxEnum["Nothing"] = "Nothing";
    UserApiGetMessagesInboxEnum["Received"] = "Received";
    UserApiGetMessagesInboxEnum["Sent"] = "Sent";
    UserApiGetMessagesInboxEnum["Notifications"] = "Notifications";
})(UserApiGetMessagesInboxEnum = exports.UserApiGetMessagesInboxEnum || (exports.UserApiGetMessagesInboxEnum = {}));
var UserApiGetMessagesQueryParams = /** @class */ (function (_super) {
    __extends(UserApiGetMessagesQueryParams, _super);
    function UserApiGetMessagesQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=anotherUserId" }),
        __metadata("design:type", Number)
    ], UserApiGetMessagesQueryParams.prototype, "anotherUserId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=getTotalCount" }),
        __metadata("design:type", Boolean)
    ], UserApiGetMessagesQueryParams.prototype, "getTotalCount", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=inbox" }),
        __metadata("design:type", String)
    ], UserApiGetMessagesQueryParams.prototype, "inbox", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=maxResults" }),
        __metadata("design:type", Number)
    ], UserApiGetMessagesQueryParams.prototype, "maxResults", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=start" }),
        __metadata("design:type", Number)
    ], UserApiGetMessagesQueryParams.prototype, "start", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=unread" }),
        __metadata("design:type", Boolean)
    ], UserApiGetMessagesQueryParams.prototype, "unread", void 0);
    return UserApiGetMessagesQueryParams;
}(utils_1.SpeakeasyBase));
exports.UserApiGetMessagesQueryParams = UserApiGetMessagesQueryParams;
var UserApiGetMessagesRequest = /** @class */ (function (_super) {
    __extends(UserApiGetMessagesRequest, _super);
    function UserApiGetMessagesRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", UserApiGetMessagesPathParams)
    ], UserApiGetMessagesRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", UserApiGetMessagesQueryParams)
    ], UserApiGetMessagesRequest.prototype, "queryParams", void 0);
    return UserApiGetMessagesRequest;
}(utils_1.SpeakeasyBase));
exports.UserApiGetMessagesRequest = UserApiGetMessagesRequest;
var UserApiGetMessagesResponse = /** @class */ (function (_super) {
    __extends(UserApiGetMessagesResponse, _super);
    function UserApiGetMessagesResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Uint8Array)
    ], UserApiGetMessagesResponse.prototype, "body", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], UserApiGetMessagesResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.PartialFindResultUserMessageContract)
    ], UserApiGetMessagesResponse.prototype, "partialFindResultUserMessageContract", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], UserApiGetMessagesResponse.prototype, "statusCode", void 0);
    return UserApiGetMessagesResponse;
}(utils_1.SpeakeasyBase));
exports.UserApiGetMessagesResponse = UserApiGetMessagesResponse;
