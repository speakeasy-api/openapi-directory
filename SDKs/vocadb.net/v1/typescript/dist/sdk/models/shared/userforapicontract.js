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
exports.UserForApiContract = exports.UserForApiContractGroupIdEnum = void 0;
var utils_1 = require("../../../internal/utils");
var userknownlanguagecontract_1 = require("./userknownlanguagecontract");
var entrythumbforapicontract_1 = require("./entrythumbforapicontract");
var oldusernamecontract_1 = require("./oldusernamecontract");
var UserForApiContractGroupIdEnum;
(function (UserForApiContractGroupIdEnum) {
    UserForApiContractGroupIdEnum["Nothing"] = "Nothing";
    UserForApiContractGroupIdEnum["Limited"] = "Limited";
    UserForApiContractGroupIdEnum["Regular"] = "Regular";
    UserForApiContractGroupIdEnum["Trusted"] = "Trusted";
    UserForApiContractGroupIdEnum["Moderator"] = "Moderator";
    UserForApiContractGroupIdEnum["Admin"] = "Admin";
})(UserForApiContractGroupIdEnum = exports.UserForApiContractGroupIdEnum || (exports.UserForApiContractGroupIdEnum = {}));
var UserForApiContract = /** @class */ (function (_super) {
    __extends(UserForApiContract, _super);
    function UserForApiContract() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=active" }),
        __metadata("design:type", Boolean)
    ], UserForApiContract.prototype, "active", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=groupId" }),
        __metadata("design:type", String)
    ], UserForApiContract.prototype, "groupId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=id" }),
        __metadata("design:type", Number)
    ], UserForApiContract.prototype, "id", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=knownLanguages", elemType: userknownlanguagecontract_1.UserKnownLanguageContract }),
        __metadata("design:type", Array)
    ], UserForApiContract.prototype, "knownLanguages", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=mainPicture" }),
        __metadata("design:type", entrythumbforapicontract_1.EntryThumbForApiContract)
    ], UserForApiContract.prototype, "mainPicture", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=memberSince" }),
        __metadata("design:type", Date)
    ], UserForApiContract.prototype, "memberSince", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], UserForApiContract.prototype, "name", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=oldUsernames", elemType: oldusernamecontract_1.OldUsernameContract }),
        __metadata("design:type", Array)
    ], UserForApiContract.prototype, "oldUsernames", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=verifiedArtist" }),
        __metadata("design:type", Boolean)
    ], UserForApiContract.prototype, "verifiedArtist", void 0);
    return UserForApiContract;
}(utils_1.SpeakeasyBase));
exports.UserForApiContract = UserForApiContract;
