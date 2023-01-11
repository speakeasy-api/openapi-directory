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
exports.UserApiGetListResponse = exports.UserApiGetListRequest = exports.UserApiGetListQueryParams = exports.UserApiGetListSortEnum = exports.UserApiGetListNameMatchModeEnum = exports.UserApiGetListGroupsEnum = exports.UserApiGetListFieldsEnum = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var UserApiGetListFieldsEnum;
(function (UserApiGetListFieldsEnum) {
    UserApiGetListFieldsEnum["None"] = "None";
    UserApiGetListFieldsEnum["KnownLanguages"] = "KnownLanguages";
    UserApiGetListFieldsEnum["MainPicture"] = "MainPicture";
    UserApiGetListFieldsEnum["OldUsernames"] = "OldUsernames";
})(UserApiGetListFieldsEnum = exports.UserApiGetListFieldsEnum || (exports.UserApiGetListFieldsEnum = {}));
var UserApiGetListGroupsEnum;
(function (UserApiGetListGroupsEnum) {
    UserApiGetListGroupsEnum["Nothing"] = "Nothing";
    UserApiGetListGroupsEnum["Limited"] = "Limited";
    UserApiGetListGroupsEnum["Regular"] = "Regular";
    UserApiGetListGroupsEnum["Trusted"] = "Trusted";
    UserApiGetListGroupsEnum["Moderator"] = "Moderator";
    UserApiGetListGroupsEnum["Admin"] = "Admin";
})(UserApiGetListGroupsEnum = exports.UserApiGetListGroupsEnum || (exports.UserApiGetListGroupsEnum = {}));
var UserApiGetListNameMatchModeEnum;
(function (UserApiGetListNameMatchModeEnum) {
    UserApiGetListNameMatchModeEnum["Auto"] = "Auto";
    UserApiGetListNameMatchModeEnum["Partial"] = "Partial";
    UserApiGetListNameMatchModeEnum["StartsWith"] = "StartsWith";
    UserApiGetListNameMatchModeEnum["Exact"] = "Exact";
    UserApiGetListNameMatchModeEnum["Words"] = "Words";
})(UserApiGetListNameMatchModeEnum = exports.UserApiGetListNameMatchModeEnum || (exports.UserApiGetListNameMatchModeEnum = {}));
var UserApiGetListSortEnum;
(function (UserApiGetListSortEnum) {
    UserApiGetListSortEnum["RegisterDate"] = "RegisterDate";
    UserApiGetListSortEnum["Name"] = "Name";
    UserApiGetListSortEnum["Group"] = "Group";
})(UserApiGetListSortEnum = exports.UserApiGetListSortEnum || (exports.UserApiGetListSortEnum = {}));
var UserApiGetListQueryParams = /** @class */ (function (_super) {
    __extends(UserApiGetListQueryParams, _super);
    function UserApiGetListQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], UserApiGetListQueryParams.prototype, "fields", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=getTotalCount" }),
        __metadata("design:type", Boolean)
    ], UserApiGetListQueryParams.prototype, "getTotalCount", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=groups" }),
        __metadata("design:type", String)
    ], UserApiGetListQueryParams.prototype, "groups", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=includeDisabled" }),
        __metadata("design:type", Boolean)
    ], UserApiGetListQueryParams.prototype, "includeDisabled", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=joinDateAfter" }),
        __metadata("design:type", Date)
    ], UserApiGetListQueryParams.prototype, "joinDateAfter", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=joinDateBefore" }),
        __metadata("design:type", Date)
    ], UserApiGetListQueryParams.prototype, "joinDateBefore", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=knowsLanguage" }),
        __metadata("design:type", String)
    ], UserApiGetListQueryParams.prototype, "knowsLanguage", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=maxResults" }),
        __metadata("design:type", Number)
    ], UserApiGetListQueryParams.prototype, "maxResults", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=nameMatchMode" }),
        __metadata("design:type", String)
    ], UserApiGetListQueryParams.prototype, "nameMatchMode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=onlyVerified" }),
        __metadata("design:type", Boolean)
    ], UserApiGetListQueryParams.prototype, "onlyVerified", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=query" }),
        __metadata("design:type", String)
    ], UserApiGetListQueryParams.prototype, "query", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=sort" }),
        __metadata("design:type", String)
    ], UserApiGetListQueryParams.prototype, "sort", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=start" }),
        __metadata("design:type", Number)
    ], UserApiGetListQueryParams.prototype, "start", void 0);
    return UserApiGetListQueryParams;
}(utils_1.SpeakeasyBase));
exports.UserApiGetListQueryParams = UserApiGetListQueryParams;
var UserApiGetListRequest = /** @class */ (function (_super) {
    __extends(UserApiGetListRequest, _super);
    function UserApiGetListRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", UserApiGetListQueryParams)
    ], UserApiGetListRequest.prototype, "queryParams", void 0);
    return UserApiGetListRequest;
}(utils_1.SpeakeasyBase));
exports.UserApiGetListRequest = UserApiGetListRequest;
var UserApiGetListResponse = /** @class */ (function (_super) {
    __extends(UserApiGetListResponse, _super);
    function UserApiGetListResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Uint8Array)
    ], UserApiGetListResponse.prototype, "body", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], UserApiGetListResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.PartialFindResultUserForApiContract)
    ], UserApiGetListResponse.prototype, "partialFindResultUserForApiContract", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], UserApiGetListResponse.prototype, "statusCode", void 0);
    return UserApiGetListResponse;
}(utils_1.SpeakeasyBase));
exports.UserApiGetListResponse = UserApiGetListResponse;
