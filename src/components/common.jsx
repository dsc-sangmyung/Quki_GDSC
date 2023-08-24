import Megaricano from '../assets/coffee/32oz_Americano.jpeg';
import IcedAmericano from '../assets/coffee/Americano_Ice.jpeg';
import Americano from '../assets/coffee/Americano.jpeg';
import IcedCaffeLatte from '../assets/coffee/Caffe_Latte_Ice.jpeg'
import CaffeLatte from '../assets/coffee/Caffe_Latte.jpeg'
import IcedCaffeMocha from '../assets/coffee/Caffe_Mocha_Ice.jpeg'
import CaffeMocha from '../assets/coffee/Caffe_Mocha.jpeg'
import IcedCappuccino from '../assets/coffee/Cappuccino_Ice.jpeg';
import Cappuccino from '../assets/coffee/Cappuccino.jpeg';
import IcedCaramelMacchiato from '../assets/coffee/Caramel_Macchiato_Ice.jpeg';
import CaramelMacchiato from '../assets/coffee/Caramel_Macchiato.jpeg';
import IcedColdbrew from '../assets/coffee/Coldbrew_Ice.jpeg';
import Coldbrew from '../assets/coffee/Coldbrew.jpeg';
import IcedColdbrewLatte from '../assets/coffee/Coldbrew_Latte_Ice.jpeg';
import ColdbrewLatte from '../assets/coffee/Coldbrew_Latte.jpeg';
import CondensedMilkLatte from '../assets/coffee/Condensed_Milk_Latte.jpeg';
import IcedCubeLatte from '../assets/coffee/Cube_Latte_Ice.jpeg';
import IcedHazelnutAmericano from '../assets/coffee/Hazelnut_Americano_Ice.jpeg';
import HazelnutAmericano from '../assets/coffee/Hazelnut_Americano.jpeg';
import IcedHazelnutLatte from '../assets/coffee/Hazelnut_Latte_Ice.jpeg';
import HazelnutLatte from '../assets/coffee/Hazelnut_Latte.jpeg';
import IcedHoneyAmericano from '../assets/coffee/Honey_Americano_Ice.jpeg';
import HoneyAmericano from '../assets/coffee/Honey_Americano.jpeg';
import IcedVanillaAmericano from '../assets/coffee/Vanilla_Americano_Ice.jpeg';
import VanillaAmericano from '../assets/coffee/Vanilla_Americano.jpeg';
import BlueLemonAde from '../assets/ade/Blue_Lemon_Ade.jpeg';
import LemonAde from '../assets/ade/Lemon_Ade.jpeg';
import CherryCoke from '../assets/ade/Cherry_Coke.jpeg';
import GrapefruitAde from '../assets/ade/Grapefruit_Ade.jpeg';
import GreenGrapeAde from '../assets/ade/Green_Grape_Ade.jpeg';
import LimeMojito from '../assets/ade/Lime_Mojito.jpeg';
import MEGAAde from '../assets/ade/MEGA_Ade.jpeg';
import BlueUnicornMagicAde from '../assets/ade/Unicorn_Magic_Ade(Blue).jpeg';
import PinkUnicornMagicAde from '../assets/ade/Unicorn_Magic_Ade(Pink).jpeg';
import BrownSugarBubbleLatte from '../assets/drink/Brown_Sugar_Bubble_Latte.jpeg';
import BrownSugarBubbleMilkteaLatte from '../assets/drink/Brown_Sugar_Bubble_Milktea_Latte.jpeg';
import BrownSugarLatteNoBubble from '../assets/drink/Brown_Sugar_Latte(No_Bubble).jpeg';
import BrownSugarMilkteaLatteNoBubble from '../assets/drink/Brown_Sugar_Milktea_Latte(No_Bubble).jpeg';
import IcedGrainLatte from '../assets/drink/Grain_Latte_Ice.jpeg';
import GrainLatte from '../assets/drink/Grain_Latte.jpeg';
import IcedGreenTeaLatte from '../assets/drink/Green_Tea_Latte_Ice.jpeg';
import GreenTeaLatte from '../assets/drink/Green_Tea_Latte.jpeg';
import HotChoco from '../assets/drink/Hot_Choco.jpeg';
import IcedChoco from '../assets/drink/Ice_Choco.jpeg';
import IcedMEGAChocolate from '../assets/drink/MEGA_Chocolate_Ice.jpeg'
import MEGAChocolate from '../assets/drink/MEGA_Chocolate.jpeg'
import OreoChocolateLatte from '../assets/drink/Oreo_Chocolate_Latte.jpeg';
import IcedRoyalMilkTeaLatte from '../assets/drink/Royal_Milk_Tea_Latte_Ice.jpeg';
import RoyalMilkTeaLatte from '../assets/drink/Royal_Milk_Tea_Latte.jpeg';
import StrawberryLatte from '../assets/drink/Strawberry_Latte.png';
import IcedSweetPotatoLatte from '../assets/drink/Sweet_Potato_Latte_Ice.jpeg';
import SweetPotatoLatte from '../assets/drink/Sweet_Potato_Latte.jpeg';
import IcedApplecitronTea from '../assets/tea/Applecitron_Tea_Ice.jpeg';
import ApplecitronTea from '../assets/tea/Applecitron_Tea.jpeg';
import IcedChamoile from '../assets/tea/Chamomile_Ice.jpeg';
import Chamoile from '../assets/tea/Chamomile.jpeg';
import IcedCitronTea from '../assets/tea/Citron_Tea_Ice.jpeg';
import CitronTea from '../assets/tea/Citron_Tea.jpeg';
import IcedGrapefruitTea from '../assets/tea/Grapefruit_Tea_Ice.jpeg';
import GrapefruitTea from '../assets/tea/Grapefruit_Tea.jpeg';
import IcedGreenTea from '../assets/tea/Green_Tea_Ice.jpeg';
import GreenTea from '../assets/tea/Green_Tea.jpeg';
import IcedHoneyGrapefruitBlackTea from '../assets/tea/Honey_Grapefruit_Black_Tea_Ice.jpeg';
import HoneyGrapefruitBlackTea from '../assets/tea/Honey_Grapefruit_Black_Tea.jpeg';
import IcedPeachTea from '../assets/tea/Peach_Iced_Tea_Ice.jpeg';

export const categories = [
    {
        name : '전체',
        type : 'all',
        id : 1,
    },
    {
        name : '커피',
        type : 'coffee',
        id : 2,
    },
    {
        name : '에이드',
        type : 'ade',
        id : 3,
    },
    {
        name : '음료',
        type : 'drink',
        id : 4,
    },
    {
        name : '차',
        type : 'tea',
        id : 5,
    },
];

// options ?
// name ( Add key value about id) - complete
// market ( brand ) + category 
 

export const market = [
    {
        id : 1,
        brand : 'megacoffee',
        type : 'cafe',
    },
    {
        id : 2,
        brand : 'gongcha',
        type : 'cafe',
    },
    {
        id : 3,
        brand : 'kfc',
        type : 'fastfood',
    },
    {
        id : 4,
        brand : 'burgerking',
        type : 'fastfood',
    },
    {
        id : 5,
        brand : 'lottelia',
        type : 'fastfood',
    },
]
export const nameList = [
    {
        name : '메가리카노',
        id : 1
    },
    {
        name : '차가운 아메리카노',
        id : 2
    },
    {
        name : '뜨거운 아메리카노',
        id : 3
    },
    {
        name : '차가운 카페라떼',
        id : 4
    },
    {
        name : '뜨거운 카페라떼',
        id : 5
    },
    {
        name : '차가운 카페모카',
        id : 6
    },
    {
        name : '뜨거운 카페모카',
        id : 7
    },
    {
        name : '차가운 카푸치노',
        id : 8
    },
    {
        name : '뜨거운 카푸치노',
        id : 9
    },
    {
        name : '차가운 카라멜 마끼야또',
        id : 10
    },
    {
        name : '뜨거운 카라멜 마끼야또',
        id : 11
    },
    {
        name : '차가운 콜드블루',
        id : 12
    },
    {
        name : '뜨거운 콜드블루',
        id : 13
    },
    {
        name : '차가운 콜드블루 라떼',
        id : 14
    },
    {
        name : '뜨거운 콜드블루 라떼',
        id : 15
    },
    {
        name : '뜨거운 연유 라떼',
        id : 16
    },
    {
        name : '차가운 큐브 라떼',
        id : 17
    },
    {
        name : '차가운 헤이즐넛 아메리카노',
        id : 18
    },
    {
        name : '뜨거운 헤이즐넛 아메리카노',
        id : 19
    },
    {
        name : '차가운 헤이즐넛 라떼',
        id : 20
    },
    {
        name : '뜨거운 헤이즐넛 라떼',
        id : 21
    },
    {
        name : '차가운 꿀아메리카노',
        id : 22
    },
    {
        name : '뜨거운 꿀아메리카노',
        id : 23
    },
    {
        name : '차가운 바닐라 아메리카노',
        id : 24
    },
    {
        name : '뜨거운 바닐라 아메리카노',
        id : 25
    },
    {
        name : '블루 레몬에이드',
        id : 26
    },
    {
        name : '레몬에이드',
        id : 27
    },
    {
        name : '체리콕',
        id : 28
    },
    {
        name : '자몽 에이드',
        id : 29
    },
    {
        name : '청포도 에이드',
        id : 30
    },
    {
        name : '라임 모히또',
        id : 31
    },
    {
        name : '메가 에이드',
        id : 32
    },
    {
        name : '유니콘 매직 에이드(블루)',
        id : 33
    },
    {
        name : '유니콘 매직 에이드(핑크)',
        id : 34
    },
    {
        name : '흑당 버블 라떼',
        id : 35
    },
    {
        name : '흑당 버블 밀크티',
        id : 36
    },
    {
        name : '흑당 버블 라떼(펄x)',
        id : 37
    },
    {
        name : '흑당 버블 밀크티(펄x)',
        id : 38
    },
    {
        name : '차가운 곡물 라떼',
        id : 39
    },
    {
        name :  '뜨거운 곡물 라떼',
        id : 40
    },
    {
        name : '차가운 녹차 라떼',
        id : 41
    },
    {
        name : '뜨거운 녹차 라떼',
        id : 42
    },
    {
        name : '뜨거운 초코',
        id : 43
    },
    {
        name : '차가운 초코',
        id : 44
    },
    {
        name : '차가운 메가초코',
        id : 45
    },
    {
        name : '뜨거운 메가초코',
        id : 46
    },
    {
        name : '오레오 초코 라떼',
        id : 47
    },
    {
        name : '차가운 로얄 밀크티',
        id : 48
    },
    {
        name : '뜨거운 로얄 밀크티',
        id : 49
    },
    {
        name : '딸기 라떼',
        id : 50
    },
    {
        name : '차가운 고구마 라떼',
        id : 51
    },
    {
        name : '뜨거운 고구마 라떼',
        id : 52
    },
    {
        name : '차가운 사과유자차',
        id : 53
    },
    {
        name : '뜨거운 사과유자차',
        id : 54
    },
    {
        name : '차가운 캐모마일차',
        id : 55
    },
    {
        name : '뜨거운 캐모마일차',
        id : 56
    },
    {
        name : '차가운 유자차',
        id : 57
    },
    {
        name : '뜨거운 유자차',
        id : 58
    },
    {
        name : '차가운 자몽 티',
        id : 59
    },
    {
        name : '뜨거운 자몽 티',
        id : 60
    },
    {
        name : '차가운 녹차',
        id : 61
    },
    {
        name : '뜨거운 녹차',
        id : 62
    },
    {
        name : '차가운 허니 자몽 블랙티',
        id : 63
    },
    {
        name : '뜨거운 허니 자몽 블랙티',
        id : 64
    },
    {
        name : '복숭아 아이스티',
        id : 65
    },
]

export const items = [ 
    {
        id : 1,
        type : 'coffee',
        price : 3000,
        options : {},
        count : 1,
        url : Megaricano,
        ice : true,
        cream : false,
        infomation : 0
    },
    {
        id : 2,
        type : 'coffee',
        price : 2000,
        options : {},
        count : 1,
        url : IcedAmericano,
        ice : true,
        cream : false,
        infomation : 0
    },
    {
        id : 3,
        type : 'coffee',
        price : 1500,
        options : {},
        count : 1,
        url : Americano,
        ice : false,
        cream : false,
        infomation : 0
    },
    {
        id : 4,
        type : 'coffee',
        price : 2900,
        options : {},
        count : 1,
        url : IcedCaffeLatte,
        ice : true,
        cream : true,
        infomation : 0
    },
    {
        id : 5,
        type : 'coffee',
        price : 2900,
        options : {},
        count : 1,
        url : CaffeLatte,
        ice : false,
        cream : true,
        infomation : 0
    },
    {
        id : 6,
        type : 'coffee',
        price : 3900,
        options : {},
        count : 1,
        url : IcedCaffeMocha,
        ice : true,
        cream : true,
        infomation : 0
    },
    {
        id : 7,
        type : 'coffee',
        price : 3900,
        options : {},
        count : 1,
        url : CaffeMocha,
        ice : false,
        cream : true,
        infomation : 0
    },
    {
        id : 8,
        type : 'coffee',
        price : 2900,
        options : {},
        count : 1,
        url : IcedCappuccino,
        ice : true,
        cream : true,
        infomation : 0
    },
    {
        id : 9,
        type : 'coffee',
        price : 2900,
        options : {},
        count : 1,
        url : Cappuccino,
        ice : false,
        cream : true,
        infomation : 0
    },
    {
        id : 10,
        type : 'coffee',
        price : 3700,
        options : {},
        count : 1,
        url : IcedCaramelMacchiato,
        ice : true,
        cream : true,
        infomation : 0
    },
    {
        id : 11,
        type : 'coffee',
        price : 3700,
        options : {},
        count : 1,
        url : CaramelMacchiato,
        ice : false,
        cream : true,
        infomation : 0
    },
    {
        id : 12,
        type : 'coffee',
        price : 3500,
        options : {},
        count : 1,
        url : IcedColdbrew,
        ice : true,
        cream : false,
        infomation : 0
    },
    {
        id : 13,
        type : 'coffee',
        price : 3500,
        options : {},
        count : 1,
        url : Coldbrew,
        ice : false,
        cream : false,
        infomation : 0
    },
    {
        id : 14,
        type : 'coffee',
        price : 4000,
        options : {},
        count : 1,
        url : IcedColdbrewLatte,
        ice : true,
        cream : true,
        infomation : 0
    },
    {
        id : 15,
        type : 'coffee',
        price : 4000,
        options : {},
        count : 1,
        url : ColdbrewLatte,
        ice : false,
        cream : true,
        infomation : 0
    },
    {
        id : 16,
        type : 'coffee',
        price : 3900,
        options : {},
        count : 1,
        url : CondensedMilkLatte,
        ice : false,
        cream : true,
        infomation : 0
    },
    {
        id : 17,
        type : 'coffee',
        price : 4200,
        options : {},
        count : 1,
        url : IcedCubeLatte,
        ice : true,
        cream : true,
        infomation : 0
    },
    {
        id : 18,
        type : 'coffee',
        price : 2700,
        options : {},
        count : 1,
        url : IcedHazelnutAmericano,
        ice : true,
        cream : false,
        infomation : 0
    },
    {
        id : 19,
        type : 'coffee',
        price : 2700,
        options : {},
        count : 1,
        url : HazelnutAmericano,
        ice : false,
        cream : false,
        infomation : 0
    },
    {
        id : 20,
        type : 'coffee',
        price : 2700,
        options : {},
        count : 1,
        url : IcedHazelnutLatte,
        ice : true,
        cream : true,
        infomation : 0
    },
    {
        id : 21,
        type : 'coffee',
        price : 2700,
        options : {},
        count : 1,
        url : HazelnutLatte,
        ice : false,
        cream : true,
        infomation : 0
    },
    {
        id : 22,
        type : 'coffee',
        price : 2700,
        options : {},
        count : 1,
        url : IcedHoneyAmericano,
        ice : true,
        cream : false,
        infomation : 0
    },
    {
        id : 23,
        type : 'coffee',
        price : 2700,
        options : {},
        count : 1,
        url : HoneyAmericano,
        ice : false,
        cream : false,
        infomation : 0
    },
    {
        id : 24,
        type : 'coffee',
        price : 2700,
        options : {},
        count : 1,
        url : IcedVanillaAmericano,
        ice : true,
        cream : false,
        infomation : 0
    },    
    {
        id : 25,
        type : 'coffee',
        price : 2700,
        options : {},
        count : 1,
        url : VanillaAmericano,
        ice : false,
        cream : false,
        infomation : 0
    },
    {
        id : 26,
        type : 'ade',
        price : 3500,
        options : {},
        count : 1,
        url : BlueLemonAde,
        ice : true,
        cream : false,
        infomation : 0
    },
    {
        id : 27,
        type : 'ade',
        price : 3500,
        options : {},
        count : 1,
        url : LemonAde,
        ice : true,
        cream : false,
        infomation : 0
    },
    {
        id : 28,
        type : 'ade',
        price : 3300,
        options : {},
        count : 1,
        url : CherryCoke,
        ice : true,
        cream : false,
        infomation : 0
    },
    {
        id : 29,
        type : 'ade',
        price : 3500,
        options : {},
        count : 1,
        url : GrapefruitAde,
        ice : true,
        cream : false,
        infomation : 0
    },
    {
        id : 30,
        type : 'ade',
        price : 3500,
        options : {},
        count : 1,
        url : GreenGrapeAde,
        ice : true,
        cream : false,
        infomation : 0
    },
    {
        id : 31,
        type : 'ade',
        price : 3500,
        options : {},
        count : 1,
        url : LimeMojito,
        ice : true,
        cream : false,
        infomation : 0
    },
    {
        id : 32,
        type : 'ade',
        price : 3900,
        options : {},
        count : 1,
        url : MEGAAde,
        ice : true,
        cream : false,
        infomation : 0
    },
    {
        id : 33,
        type : 'ade',
        price : 3500,
        options : {},
        count : 1,
        url : BlueUnicornMagicAde,
        ice : true,
        cream : false,
        infomation : 0
    },
    {
        id : 34,
        type : 'ade',
        price : 3500,
        options : {},
        count : 1,
        url : PinkUnicornMagicAde,
        ice : true,
        cream : false,
        infomation : 0
    },
    {
        id : 35,
        type : 'drink',
        price : 3700,
        options : {},
        count : 1,
        url : BrownSugarBubbleLatte,
        ice : true,
        cream : true,
        infomation : 0
    },
    {
        id : 36,
        type : 'drink',
        price : 3800,
        options : {},
        count : 1,
        url : BrownSugarBubbleMilkteaLatte,
        ice : true,
        cream : false,
        infomation : 0
    },
    {
        id : 37,
        type : 'drink',
        price : 3800,
        options : {},
        count : 1,
        url : BrownSugarLatteNoBubble,
        ice : true,
        cream : false,
        infomation : 0
    },
    {
        id : 38,
        type : 'drink',
        price : 3800,
        options : {},
        count : 1,
        url : BrownSugarMilkteaLatteNoBubble,
        ice : true,
        cream : false,
        infomation : 0
    },
    {
        id : 39,
        type : 'drink',
        price : 3000,
        options : {},
        count : 1,
        url : IcedGrainLatte,
        ice : true,
        cream : false,
        infomation : 0
    },
    {
        id : 40,
        type : 'drink',
        price : 3000,
        options : {},
        count : 1,
        url : GrainLatte,
        ice : false,
        cream : true,
        infomation : 0
    },
    {
        id : 41,
        type : 'drink',
        price : 3500,
        options : {},
        count : 1,
        url : IcedGreenTeaLatte,
        ice : true,
        cream : false,
        infomation : 0
    },
    {
        id : 42,
        type : 'drink',
        price : 3500,
        options : {},
        count : 1,
        url : GreenTeaLatte,
        ice : false,
        cream : true,
        infomation : 0
    },
    {
        id : 43,
        type : 'drink',
        price : 3500,
        options : {},
        count : 1,
        url : HotChoco,
        ice : false,
        cream : true,
        infomation : 0
    },
    {
        id : 44,
        type : 'drink',
        price : 3500,
        options : {},
        count : 1,
        url : IcedChoco,
        ice : true,
        cream : false,
        infomation : 0
    },
    {
        id : 45,
        type : 'drink',
        price : 3800,
        options : {},
        count : 1,
        url : IcedMEGAChocolate,
        ice : true,
        cream : false,
        infomation : 0
    },
    {
        id : 46,
        type : 'drink',
        price : 3800,
        options : {},
        count : 1,
        url : MEGAChocolate,
        ice : false,
        cream : true,
        infomation : 0
    },
    {
        id : 47,
        type : 'drink',
        price : 3900,
        options : {},
        count : 1,
        url : OreoChocolateLatte,
        ice : true,
        cream : true,
        infomation : 0
    },
    {
        id : 48,
        type : 'drink',
        price : 3700,
        options : {},
        count : 1,
        url : IcedRoyalMilkTeaLatte,
        ice : true,
        cream : false,
        infomation : 0
    },
    {
        id : 49,
        type : 'drink',
        price : 3700,
        options : {},
        count : 1,
        url : RoyalMilkTeaLatte,
        ice : false,
        cream : true,
        infomation : 0
    },
    {
        id : 50,
        type : 'drink',
        price : 3700,
        options : {},
        count : 1,
        url : StrawberryLatte,
        ice : true,
        cream : false,
        infomation : 0
    },
    {
        id : 51,
        type : 'drink',
        price : 3500,
        options : {},
        count : 1,
        url : IcedSweetPotatoLatte,
        ice : true,
        cream : false,
        infomation : 0
    },
    {
        id : 52,
        type : 'drink',
        price : 3500,
        options : {},
        count : 1,
        url : SweetPotatoLatte,
        ice : false,
        cream : true,
        infomation : 0
    },
    {
        id : 53,
        type : 'tea',
        price : 3500,
        options : {},
        count : 1,
        url : IcedApplecitronTea,
        ice : true,
        cream : false,
        infomation : 0
    },
    {
        id : 54,
        type : 'tea',
        price : 3500,
        options : {},
        count : 1,
        url : ApplecitronTea,
        ice : false,
        cream : true,
        infomation : 0
    },
    {
        id : 55,
        type : 'tea',
        price : 3500,
        options : {},
        count : 1,
        url : IcedChamoile,
        ice : true,
        cream : false,
        infomation : 0
    },
    {
        id : 56,
        type : 'tea',
        price : 3500,
        options : {},
        count : 1,
        url : Chamoile,
        ice : false,
        cream : true,
        infomation : 0
    },
    {
        id : 57,
        type : 'tea',
        price : 3300,
        options : {},
        count : 1,
        url : IcedCitronTea,
        ice : true,
        cream : false,
        infomation : 0
    },
    {
        id : 58,
        type : 'tea',
        price : 3300,
        options : {},
        count : 1,
        url : CitronTea,
        ice : false,
        cream : true,
        infomation : 0
    },
    {
        id : 59,
        type : 'tea',
        price : 3300,
        options : {},
        count : 1,
        url : IcedGrapefruitTea,
        ice : true,
        cream : false,
        infomation : 0
    },
    {
        id : 60,
        type : 'tea',
        price : 3300,
        options : {},
        count : 1,
        url : GrapefruitTea,
        ice : false,
        cream : true,
        infomation : 0
    },
    {
        id : 61,
        type : 'tea',
        price : 2500,
        options : {},
        count : 1,
        url : IcedGreenTea,
        ice : true,
        cream : false,
        infomation : 0
    },
    {
        id : 62,
        type : 'tea',
        price : 2500,
        options : {},
        count : 1,
        url : GreenTea,
        ice : false,
        cream : true,
        infomation : 0
    },
    {
        id : 63,
        type : 'tea',
        price : 3700,
        options : {},
        count : 1,
        url : IcedHoneyGrapefruitBlackTea,
        ice : true,
        cream : false,
        infomation : 0
    },
    {
        id : 64,
        type : 'tea',
        price : 3700,
        options : {},
        count : 1,
        url : HoneyGrapefruitBlackTea,
        ice : false,
        cream : true,
        infomation : 0
    },
    {
        id : 65,
        type : 'tea',
        price : 3700,
        options : {},
        count : 1,
        url : IcedPeachTea,
        ice : true,
        cream : false,
        infomation : 0
    }
]