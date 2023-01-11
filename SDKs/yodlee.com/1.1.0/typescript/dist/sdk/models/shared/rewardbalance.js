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
exports.RewardBalance = exports.RewardBalanceBalanceTypeEnum = void 0;
var utils_1 = require("../../../internal/utils");
var RewardBalanceBalanceTypeEnum;
(function (RewardBalanceBalanceTypeEnum) {
    RewardBalanceBalanceTypeEnum["ExpiringBalance"] = "EXPIRING_BALANCE";
    RewardBalanceBalanceTypeEnum["BalanceToLevel"] = "BALANCE_TO_LEVEL";
    RewardBalanceBalanceTypeEnum["BalanceToReward"] = "BALANCE_TO_REWARD";
    RewardBalanceBalanceTypeEnum["Balance"] = "BALANCE";
    RewardBalanceBalanceTypeEnum["TotalBalance"] = "TOTAL_BALANCE";
})(RewardBalanceBalanceTypeEnum = exports.RewardBalanceBalanceTypeEnum || (exports.RewardBalanceBalanceTypeEnum = {}));
var RewardBalance = /** @class */ (function (_super) {
    __extends(RewardBalance, _super);
    function RewardBalance() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=balance" }),
        __metadata("design:type", Number)
    ], RewardBalance.prototype, "balance", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=balanceToLevel" }),
        __metadata("design:type", String)
    ], RewardBalance.prototype, "balanceToLevel", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=balanceToReward" }),
        __metadata("design:type", String)
    ], RewardBalance.prototype, "balanceToReward", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=balanceType" }),
        __metadata("design:type", String)
    ], RewardBalance.prototype, "balanceType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], RewardBalance.prototype, "description", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=expiryDate" }),
        __metadata("design:type", String)
    ], RewardBalance.prototype, "expiryDate", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=units" }),
        __metadata("design:type", String)
    ], RewardBalance.prototype, "units", void 0);
    return RewardBalance;
}(utils_1.SpeakeasyBase));
exports.RewardBalance = RewardBalance;
