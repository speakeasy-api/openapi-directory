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
exports.UserAssistantCreateResponse = exports.UserAssistantCreateRequest = exports.UserAssistantCreate201ApplicationJson = exports.UserAssistantCreateSecurity = exports.UserAssistantCreateRequests = exports.UserAssistantCreateUserAssistantsList = exports.UserAssistantCreateUserAssistantsListAssistants = exports.UserAssistantCreatePathParams = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var UserAssistantCreatePathParams = /** @class */ (function (_super) {
    __extends(UserAssistantCreatePathParams, _super);
    function UserAssistantCreatePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=userId" }),
        __metadata("design:type", String)
    ], UserAssistantCreatePathParams.prototype, "userId", void 0);
    return UserAssistantCreatePathParams;
}(utils_1.SpeakeasyBase));
exports.UserAssistantCreatePathParams = UserAssistantCreatePathParams;
var UserAssistantCreateUserAssistantsListAssistants = /** @class */ (function (_super) {
    __extends(UserAssistantCreateUserAssistantsListAssistants, _super);
    function UserAssistantCreateUserAssistantsListAssistants() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=email" }),
        __metadata("design:type", String)
    ], UserAssistantCreateUserAssistantsListAssistants.prototype, "email", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], UserAssistantCreateUserAssistantsListAssistants.prototype, "id", void 0);
    return UserAssistantCreateUserAssistantsListAssistants;
}(utils_1.SpeakeasyBase));
exports.UserAssistantCreateUserAssistantsListAssistants = UserAssistantCreateUserAssistantsListAssistants;
// UserAssistantCreateUserAssistantsList
/**
 * List of user's assistants.
**/
var UserAssistantCreateUserAssistantsList = /** @class */ (function (_super) {
    __extends(UserAssistantCreateUserAssistantsList, _super);
    function UserAssistantCreateUserAssistantsList() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=assistants, multipart_form, name=assistants;json=true", elemType: UserAssistantCreateUserAssistantsListAssistants }),
        __metadata("design:type", Array)
    ], UserAssistantCreateUserAssistantsList.prototype, "assistants", void 0);
    return UserAssistantCreateUserAssistantsList;
}(utils_1.SpeakeasyBase));
exports.UserAssistantCreateUserAssistantsList = UserAssistantCreateUserAssistantsList;
var UserAssistantCreateRequests = /** @class */ (function (_super) {
    __extends(UserAssistantCreateRequests, _super);
    function UserAssistantCreateRequests() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=application/json" }),
        __metadata("design:type", UserAssistantCreateUserAssistantsList)
    ], UserAssistantCreateRequests.prototype, "userAssistantsList", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=multipart/form-data" }),
        __metadata("design:type", UserAssistantCreateUserAssistantsList)
    ], UserAssistantCreateRequests.prototype, "userAssistantsList1", void 0);
    return UserAssistantCreateRequests;
}(utils_1.SpeakeasyBase));
exports.UserAssistantCreateRequests = UserAssistantCreateRequests;
var UserAssistantCreateSecurity = /** @class */ (function (_super) {
    __extends(UserAssistantCreateSecurity, _super);
    function UserAssistantCreateSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOAuth)
    ], UserAssistantCreateSecurity.prototype, "oAuth", void 0);
    return UserAssistantCreateSecurity;
}(utils_1.SpeakeasyBase));
exports.UserAssistantCreateSecurity = UserAssistantCreateSecurity;
var UserAssistantCreate201ApplicationJson = /** @class */ (function (_super) {
    __extends(UserAssistantCreate201ApplicationJson, _super);
    function UserAssistantCreate201ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=add_at" }),
        __metadata("design:type", Date)
    ], UserAssistantCreate201ApplicationJson.prototype, "addAt", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=ids" }),
        __metadata("design:type", String)
    ], UserAssistantCreate201ApplicationJson.prototype, "ids", void 0);
    return UserAssistantCreate201ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.UserAssistantCreate201ApplicationJson = UserAssistantCreate201ApplicationJson;
var UserAssistantCreateRequest = /** @class */ (function (_super) {
    __extends(UserAssistantCreateRequest, _super);
    function UserAssistantCreateRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", UserAssistantCreatePathParams)
    ], UserAssistantCreateRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", UserAssistantCreateRequests)
    ], UserAssistantCreateRequest.prototype, "request", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", UserAssistantCreateSecurity)
    ], UserAssistantCreateRequest.prototype, "security", void 0);
    return UserAssistantCreateRequest;
}(utils_1.SpeakeasyBase));
exports.UserAssistantCreateRequest = UserAssistantCreateRequest;
var UserAssistantCreateResponse = /** @class */ (function (_super) {
    __extends(UserAssistantCreateResponse, _super);
    function UserAssistantCreateResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Uint8Array)
    ], UserAssistantCreateResponse.prototype, "body", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], UserAssistantCreateResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], UserAssistantCreateResponse.prototype, "headers", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], UserAssistantCreateResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", UserAssistantCreate201ApplicationJson)
    ], UserAssistantCreateResponse.prototype, "userAssistantCreate201ApplicationJSONObject", void 0);
    return UserAssistantCreateResponse;
}(utils_1.SpeakeasyBase));
exports.UserAssistantCreateResponse = UserAssistantCreateResponse;
