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
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserAssistantsResponse = exports.UserAssistantsRequest = exports.UserAssistantsUserAssistantsList = exports.UserAssistantsUserAssistantsListAssistants = exports.UserAssistantsPathParams = void 0;
var utils_1 = require("../../../internal/utils");
var UserAssistantsPathParams = /** @class */ (function (_super) {
    __extends(UserAssistantsPathParams, _super);
    function UserAssistantsPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=userId" }),
        __metadata("design:type", String)
    ], UserAssistantsPathParams.prototype, "userId", void 0);
    return UserAssistantsPathParams;
}(utils_1.SpeakeasyBase));
exports.UserAssistantsPathParams = UserAssistantsPathParams;
var UserAssistantsUserAssistantsListAssistants = /** @class */ (function (_super) {
    __extends(UserAssistantsUserAssistantsListAssistants, _super);
    function UserAssistantsUserAssistantsListAssistants() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=email" }),
        __metadata("design:type", String)
    ], UserAssistantsUserAssistantsListAssistants.prototype, "email", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], UserAssistantsUserAssistantsListAssistants.prototype, "id", void 0);
    return UserAssistantsUserAssistantsListAssistants;
}(utils_1.SpeakeasyBase));
exports.UserAssistantsUserAssistantsListAssistants = UserAssistantsUserAssistantsListAssistants;
// UserAssistantsUserAssistantsList
/**
 * List of user's assistants.
**/
var UserAssistantsUserAssistantsList = /** @class */ (function (_super) {
    __extends(UserAssistantsUserAssistantsList, _super);
    function UserAssistantsUserAssistantsList() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=assistants", elemType: UserAssistantsUserAssistantsListAssistants }),
        __metadata("design:type", Array)
    ], UserAssistantsUserAssistantsList.prototype, "assistants", void 0);
    return UserAssistantsUserAssistantsList;
}(utils_1.SpeakeasyBase));
exports.UserAssistantsUserAssistantsList = UserAssistantsUserAssistantsList;
var UserAssistantsRequest = /** @class */ (function (_super) {
    __extends(UserAssistantsRequest, _super);
    function UserAssistantsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", UserAssistantsPathParams)
    ], UserAssistantsRequest.prototype, "pathParams", void 0);
    return UserAssistantsRequest;
}(utils_1.SpeakeasyBase));
exports.UserAssistantsRequest = UserAssistantsRequest;
var UserAssistantsResponse = /** @class */ (function (_super) {
    __extends(UserAssistantsResponse, _super);
    function UserAssistantsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Uint8Array)
    ], UserAssistantsResponse.prototype, "body", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], UserAssistantsResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], UserAssistantsResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", UserAssistantsUserAssistantsList)
    ], UserAssistantsResponse.prototype, "userAssistantsList", void 0);
    return UserAssistantsResponse;
}(utils_1.SpeakeasyBase));
exports.UserAssistantsResponse = UserAssistantsResponse;
