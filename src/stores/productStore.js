/* Product Store */

import { defineStore } from 'pinia'

export const useProductStore = defineStore('products', () => {
    const productData = ref([
        {
            itemID: 0,
            dateCreated: 1686893973525,
            dateModified: 1686893973525,
            userCreated: '',
            userModified: '',
            itemCategory: ['stone', 'cutting'],
            itemImage: [
                '/images/productStore/XPEED-3STEP-HYBRID-PAD.jpg' // 대표 이미지
            ],
            itemTitle: `XPEED 3STEP HYBRID PAD`,
            itemDescription: ``,
            itemMaterial: [
                'Aluminum'
            ],
            itemPrice: 0,
            itemOnSale: false,
            itemSaleType: null,
            itemSalePercentage: 0,
            itemSalePrice: 0,
            itemDetailContent: { // 상세 설명 관련 내용
                fullHTML: `
                    <div>
                        <p>* Extremely aggresive grinding speed.</p>
                        <p>* Extremely flexible resin</p>
                    </div>
                `
            },
            itemPoint: 5
        },
        {
            itemID: 1,
            dateCreated: 1686893973525,
            dateModified: 1686893973525,
            userCreated: '',
            userModified: '',
            itemCategory: ['stone', 'cutting'],
            itemImage: [
                '/images/productStore/CHIPPING-FREE-BLADE.jpg' // 대표 이미지
            ],
            itemTitle: `CHIPPING FREE BLADE`,
            itemDescription: `TILE -CERAMIC, MARBLE & PORCELAIN`,
            itemMaterial: [
                'Aluminum'
            ],
            itemPrice: 0,
            itemOnSale: false,
            itemSaleType: null,
            itemSalePercentage: 0,
            itemSalePrice: 0,
            itemDetailContent: { // 상세 설명 관련 내용
                fullHTML: `
                    <div>
                        <p>Extremely clean cutting for Ceramic, Porcelain, Tile,</p>
                    </div>
                `
            },
            itemPoint: 5
        },
        {
            itemID: 2,
            dateCreated: 1686893973525,
            dateModified: 1686893973525,
            userCreated: '',
            userModified: '',
            itemCategory: ['stone', 'cutting'],
            itemImage: [
                '/images/productStore/WALL-SAW-BLADE.jpg' // 대표 이미지
            ],
            itemTitle: `WALL SAW BLADE`,
            itemDescription: `WALL SAW BLADES`,
            itemMaterial: [
                'Aluminum'
            ],
            itemPrice: 0,
            itemOnSale: false,
            itemSaleType: null,
            itemSalePercentage: 0,
            itemSalePrice: 0,
            itemDetailContent: { // 상세 설명 관련 내용
                fullHTML: `
                    <div>
                        <p></p>
                    </div>
                `
            },
            itemPoint: 5
        },
        {
            itemID: 3,
            dateCreated: 1686893973525,
            dateModified: 1686893973525,
            userCreated: '',
            userModified: '',
            itemCategory: ['stone', 'cutting'],
            itemImage: [
                '/images/productStore/METAL-CUT.png' // 대표 이미지
            ],
            itemTitle: `VACCUM BRAZED BLADES`,
            itemDescription: ``,
            itemMaterial: [
                'Aluminum'
            ],
            itemPrice: 0,
            itemOnSale: false,
            itemSaleType: null,
            itemSalePercentage: 0,
            itemSalePrice: 0,
            itemDetailContent: { // 상세 설명 관련 내용
                fullHTML: `
                    <div>
                        <p></p>
                    </div>
                `
            },
            itemPoint: 5
        },
        {
            itemID: 4,
            dateCreated: 1686893973525,
            dateModified: 1686893973525,
            userCreated: '',
            userModified: '',
            itemCategory:['stone', 'cutting'],
            itemImage: [
                '/images/productStore/SKID-PLATE.jpg' // 대표 이미지
            ],
            itemTitle: `SKID PLATE`,
            itemDescription: `SKID PLATE FOR SOFF CUT`,
            itemMaterial: [
                'Aluminum'
            ],
            itemPrice: 0,
            itemOnSale: false,
            itemSaleType: null,
            itemSalePercentage: 0,
            itemSalePrice: 0,
            itemDetailContent: { // 상세 설명 관련 내용
                fullHTML: `
                    <div>
                        <p></p>
                    </div>
                `
            },
            itemPoint: 5
        },
        {
            itemID: 5,
            dateCreated: 1686893973525,
            dateModified: 1686893973525,
            userCreated: '',
            userModified: '',
            itemCategory: ['stone', 'cutting'],
            itemImage: [
                '/images/productStore/EARLY-ENTRY-BLADES(SOFF-CUT).jpg' // 대표 이미지
            ],
            itemTitle: `EARLY ENTRY BLADES(SOFF-CUT)`,
            itemDescription: `EARLY ENTRY  ORANGE`,
            itemMaterial: [
                'Aluminum'
            ],
            itemPrice: 0,
            itemOnSale: false,
            itemSaleType: null,
            itemSalePercentage: 0,
            itemSalePrice: 0,
            itemDetailContent: { // 상세 설명 관련 내용
                fullHTML: `
                    <div>
                        <p></p>
                    </div>
                `
            },
            itemPoint: 5
        },
        {
            itemID: 6,
            dateCreated: 1686893973525,
            dateModified: 1686893973525,
            userCreated: '',
            userModified: '',
            itemCategory: ['stone', 'cutting'],
            itemImage: [
                '/images/productStore/EARLY-ENTRY-BLADES(SOFF-CUT).jpg' // 대표 이미지
            ],
            itemTitle: `PURPLE`,
            itemDescription: `EARLY ENTRY BLADES - PURPLE`,
            itemMaterial: [
                'Aluminum'
            ],
            itemPrice: 0,
            itemOnSale: false,
            itemSaleType: null,
            itemSalePercentage: 0,
            itemSalePrice: 0,
            itemDetailContent: { // 상세 설명 관련 내용
                fullHTML: `
                    <div>
                        <p>Professional grade excellent performance - slots</p>
                    </div>
                `
            },
            itemPoint: 5
        },
        {
            itemID: 7,
            dateCreated: 1686893973525,
            dateModified: 1686893973525,
            userCreated: '',
            userModified: '',
            itemCategory: ['stone', 'cutting'],
            itemImage: [
                '/images/productStore/PRO-ASPHALT.jpg' // 대표 이미지
            ],
            itemTitle: `PRO ASPHALT`,
            itemDescription: `ASPHALT - PREMIUM`,
            itemMaterial: [
                'Aluminum'
            ],
            itemPrice: 0,
            itemOnSale: false,
            itemSaleType: null,
            itemSalePercentage: 0,
            itemSalePrice: 0,
            itemDetailContent: { // 상세 설명 관련 내용
                fullHTML: `
                    <div>
                        <p>* General purpose asphalt & asphalt over concrete - great value for price</p>
                        <p>** Green concrete - professional for demanding customers, fast cutting</p>
                        <p>*** Professional grade asphalt & asphalt over concrete - professional for demanding customers, long life.</p>
                    </div>
                `
            },
            itemPoint: 5
        },
        {
            itemID: 8,
            dateCreated: 1686893973525,
            dateModified: 1686893973525,
            userCreated: '',
            userModified: '',
            itemCategory: ['stone', 'cutting'],
            itemImage: [
                '/images/productStore/PRO-ASPHALT.jpg' // 대표 이미지
            ],
            itemTitle: `PROFESSIONAL CURED CONCRETE BLADE M70`,
            itemDescription: `* Extremely hard concrete blade `,
            itemMaterial: [
                'Aluminum'
            ],
            itemPrice: 0,
            itemOnSale: false,
            itemSaleType: null,
            itemSalePercentage: 0,
            itemSalePrice: 0,
            itemDetailContent: { // 상세 설명 관련 내용
                fullHTML: `
                    <div>
                        <p>* Blade for Houston hard aggregate</p>
                        <p>* 65Hp +</p>
                    </div>
                `
            },
            itemPoint: 5
        },
        {
            itemID: 9,
            dateCreated: 1686893973525,
            dateModified: 1686893973525,
            userCreated: '',
            userModified: '',
            itemCategory: ['stone', 'cutting'],
            itemImage: [
                '/images/productStore/M50M70.png' // 대표 이미지
            ],
            itemTitle: `M50/M70`,
            itemDescription: `Cured Concrete Extra long `,
            itemMaterial: [
                'Aluminum'
            ],
            itemPrice: 0,
            itemOnSale: false,
            itemSaleType: null,
            itemSalePercentage: 0,
            itemSalePrice: 0,
            itemDetailContent: { // 상세 설명 관련 내용
                fullHTML: `
                    <div>
                        <p>*** Cured concrete - professiona for hard aggrigate 12mm segmente high.</p>
                    </div>
                `
            },
            itemPoint: 5
        },
        {
            itemID: 10,
            dateCreated: 1686893973525,
            dateModified: 1686893973525,
            userCreated: '',
            userModified: '',
            itemCategory: ['stone', 'cutting'],
            itemImage: [
                '/images/productStore/SPEED30.jpg' // 대표 이미지
            ],
            itemTitle: `SPEED 30`,
            itemDescription: `CURED CONCRETE SPEED LINE for 30HP`,
            itemMaterial: [
                'Aluminum'
            ],
            itemPrice: 0,
            itemOnSale: false,
            itemSaleType: null,
            itemSalePercentage: 0,
            itemSalePrice: 0,
            itemDetailContent: { // 상세 설명 관련 내용
                fullHTML: `
                    <div>
                        <p>*** Cured concrete - professional speed line fast cutting 13mm segmente high.</p>
                    </div>
                `
            },
            itemPoint: 5
        },
        {
            itemID: 11,
            dateCreated: 1686893973525,
            dateModified: 1686893973525,
            userCreated: '',
            userModified: '',
            itemCategory: ['stone', 'cutting'],
            itemImage: [
                '/images/productStore/PATTERN30.jpg' // 대표 이미지
            ],
            itemTitle: `PATTERN 30`,
            itemDescription: `PATTERN DIAMOND CURED CONCRETE 13MM PREMIUM`,
            itemMaterial: [
                'Aluminum'
            ],
            itemPrice: 0,
            itemOnSale: false,
            itemSaleType: null,
            itemSalePercentage: 0,
            itemSalePrice: 0,
            itemDetailContent: { // 상세 설명 관련 내용
                fullHTML: `
                    <div>
                        <p></p>
                    </div>
                `
            },
            itemPoint: 5
        },
        {
            itemID: 12,
            dateCreated: 1686893973525,
            dateModified: 1686893973525,
            userCreated: '',
            userModified: '',
            itemCategory: ['stone', 'cutting'],
            itemImage: [
                '/images/productStore/PATTERN20.jpg' // 대표 이미지
            ],
            itemTitle: `PATTERN 20`,
            itemDescription: `PATTERN DIAMOND CURED CONCRETE 10MM PREMIUM`,
            itemMaterial: [
                'Aluminum'
            ],
            itemPrice: 0,
            itemOnSale: false,
            itemSaleType: null,
            itemSalePercentage: 0,
            itemSalePrice: 0,
            itemDetailContent: { // 상세 설명 관련 내용
                fullHTML: `
                    <div>
                        <p></p>
                    </div>
                `
            },
            itemPoint: 5
        },
        {
            itemID: 13,
            dateCreated: 1686893973525,
            dateModified: 1686893973525,
            userCreated: '',
            userModified: '',
            itemCategory: ['stone', 'cutting'],
            itemImage: [
                '/images/productStore/METAL-CUT-NON.jpg' // 대표 이미지
            ],
            itemTitle: `METAL CUT - NON`,
            itemDescription: `VACUUM BRAZED - NON Protection`,
            itemMaterial: [
                'Aluminum'
            ],
            itemPrice: 0,
            itemOnSale: false,
            itemSaleType: null,
            itemSalePercentage: 0,
            itemSalePrice: 0,
            itemDetailContent: { // 상세 설명 관련 내용
                fullHTML: `
                    <div>
                        <p></p>
                    </div>
                `
            },
            itemPoint: 5
        },
        {
            itemID: 14,
            dateCreated: 1686893973525,
            dateModified: 1686893973525,
            userCreated: '',
            userModified: '',
            itemCategory: ['stone', 'cutting'],
            itemImage: [
                '/images/productStore/METAL-CUT.png' // 대표 이미지
            ],
            itemTitle: `METAL CUT`,
            itemDescription: `VACUUM BRAZED with Protection`,
            itemMaterial: [
                'Aluminum'
            ],
            itemPrice: 0,
            itemOnSale: false,
            itemSaleType: null,
            itemSalePercentage: 0,
            itemSalePrice: 0,
            itemDetailContent: { // 상세 설명 관련 내용
                fullHTML: `
                    <div>
                        <p>*** It cuts through ductile pipe, plastic, concrete,</p>
                    </div>
                `
            },
            itemPoint: 5
        },
        {
            itemID: 15,
            dateCreated: 1686893973525,
            dateModified: 1686893973525,
            userCreated: '',
            userModified: '',
            itemCategory: ['stone', 'cutting'],
            itemImage: [
                '/images/productStore/DUCTILE-IRON.jpg' // 대표 이미지
            ],
            itemTitle: `DUCTILE IRON`,
            itemDescription: `DUCTILE IRON PIPE & REBAR - LASER`,
            itemMaterial: [
                'Aluminum'
            ],
            itemPrice: 0,
            itemOnSale: false,
            itemSaleType: null,
            itemSalePercentage: 0,
            itemSalePrice: 0,
            itemDetailContent: { // 상세 설명 관련 내용
                fullHTML: `
                    <div>
                        <p>*** It cuts through ductile pipe, plastic, concrete,</p>
                    </div>
                `
            },
            itemPoint: 5
        },
        {
            itemID: 16,
            dateCreated: 1686893973525,
            dateModified: 1686893973525,
            userCreated: '',
            userModified: '',
            itemCategory: ['stone', 'cutting'],
            itemImage: [
                '/images/productStore/Combo-HB2050.jpg' // 대표 이미지
            ],
            itemTitle: `Combo HB2050`,
            itemDescription: `PREMIUM HYBRID BLADE FOR MULTI PURPOSE CUTTING`,
            itemMaterial: [
                'Aluminum'
            ],
            itemPrice: 0,
            itemOnSale: false,
            itemSaleType: null,
            itemSalePercentage: 0,
            itemSalePrice: 0,
            itemDetailContent: { // 상세 설명 관련 내용
                fullHTML: `
                    <div>
                        <p>*** Design for fast cutting multicut purpose.</p>
                        <p>*** Concrete to asphalt and stone to concrete.</p>
                    </div>
                `
            },
            itemPoint: 5
        },
        {
            itemID: 17,
            dateCreated: 1686893973525,
            dateModified: 1686893973525,
            userCreated: '',
            userModified: '',
            itemCategory: ['stone', 'cutting'],
            itemImage: [
                '/images/productStore/TWISTER.jpg' // 대표 이미지
            ],
            itemTitle: `TWISTER`,
            itemDescription: `STANDARD HYBRID BLADE FOR MULTI PURPOSE CUTTING`,
            itemMaterial: [
                'Aluminum'
            ],
            itemPrice: 0,
            itemOnSale: false,
            itemSaleType: null,
            itemSalePercentage: 0,
            itemSalePrice: 0,
            itemDetailContent: { // 상세 설명 관련 내용
                fullHTML: `
                    <div>
                        <p>*** Designed for fast cutting and extra long life on al kinds of hard materials.</p>
                    </div>
                `
            },
            itemPoint: 5
        },
        {
            itemID: 18,
            dateCreated: 1686893973525,
            dateModified: 1686893973525,
            userCreated: '',
            userModified: '',
            itemCategory: ['stone', 'cutting'],
            itemImage: [
                '/images/productStore/ECO.jpg' // 대표 이미지
            ],
            itemTitle: `ECO`,
            itemDescription: `ECO - LONG`,
            itemMaterial: [
                'Aluminum'
            ],
            itemPrice: 0,
            itemOnSale: false,
            itemSaleType: null,
            itemSalePercentage: 0,
            itemSalePrice: 0,
            itemDetailContent: { // 상세 설명 관련 내용
                fullHTML: `
                    <div>
                        <p>*** gerenal purpose asphalt blades supreme quality.</p>
                    </div>
                `
            },
            itemPoint: 5
        },
        {
            itemID: 19,
            dateCreated: 1686893973525,
            dateModified: 1686893973525,
            userCreated: '',
            userModified: '',
            itemCategory: ['stone', 'cutting'],
            itemImage: [
                '/images/productStore/VALUE-LINE.jpg' // 대표 이미지
            ],
            itemTitle: `VALUE LINE`,
            itemDescription: `SINTERED SEGMENTED BLADES FOR GRNERAL PURPOSE`,
            itemMaterial: [
                'Aluminum'
            ],
            itemPrice: 0,
            itemOnSale: false,
            itemSaleType: null,
            itemSalePercentage: 0,
            itemSalePrice: 0,
            itemDetailContent: { // 상세 설명 관련 내용
                fullHTML: `
                    <div>
                        <p></p>
                    </div>
                `
            },
            itemPoint: 5
        },
        {
            itemID: 20,
            dateCreated: 1686893973525,
            dateModified: 1686893973525,
            userCreated: '',
            userModified: '',
            itemCategory: ['stone', 'cutting'],
            itemImage: [
                '/images/productStore/LASER-ASPHALT.jpg' // 대표 이미지
            ],
            itemTitle: `LASER ASPHALT`,
            itemDescription: `ASPHALT & GREEN CONCRETE BLADES - LOW HP SAW - LASER`,
            itemMaterial: [
                'Aluminum'
            ],
            itemPrice: 0,
            itemOnSale: false,
            itemSaleType: null,
            itemSalePercentage: 0,
            itemSalePrice: 0,
            itemDetailContent: { // 상세 설명 관련 내용
                fullHTML: `
                    <div>
                        <p>*** gerenal purpose asphalt & green concrete blades supreme quality.</p>
                    </div>
                `
            },
            itemPoint: 5
        },
        {
            itemID: 21,
            dateCreated: 1686893973525,
            dateModified: 1686893973525,
            userCreated: '',
            userModified: '',
            itemCategory: ['stone', 'cutting'],
            itemImage: [
                '/images/productStore/LASER-SEGMENTED.jpg' // 대표 이미지
            ],
            itemTitle: `LASER SEGMENTED`,
            itemDescription: `LASER SEGMENTED BLADES`,
            itemMaterial: [
                'Aluminum'
            ],
            itemPrice: 0,
            itemOnSale: false,
            itemSaleType: null,
            itemSalePercentage: 0,
            itemSalePrice: 0,
            itemDetailContent: { // 상세 설명 관련 내용
                fullHTML: `
                    <div>
                        <p></p>
                    </div>
                `
            },
            itemPoint: 5
        },
        {
            itemID: 22,
            dateCreated: 1686893973525,
            dateModified: 1686893973525,
            userCreated: '',
            userModified: '',
            itemCategory: ['stone', 'cutting'],
            itemImage: [
                '/images/productStore/LASER-TURBO.jpg' // 대표 이미지
            ],
            itemTitle: `LASER TURBO`,
            itemDescription: `LASER TURBO SEGMENTED BLADES`,
            itemMaterial: [
                'Aluminum'
            ],
            itemPrice: 0,
            itemOnSale: false,
            itemSaleType: null,
            itemSalePercentage: 0,
            itemSalePrice: 0,
            itemDetailContent: { // 상세 설명 관련 내용
                fullHTML: `
                    <div>
                        <p>** general purpose concrete fast cutting</p>
                    </div>
                `
            },
            itemPoint: 5
        },
        {
            itemID: 23,
            dateCreated: 1686893973525,
            dateModified: 1686893973525,
            userCreated: '',
            userModified: '',
            itemCategory: ['stone', 'cutting'],
            itemImage: [
                '/images/productStore/pad1.jpg' // 대표 이미지
            ],
            itemTitle: ``,
            itemDescription: ``,
            itemMaterial: [
                'Aluminum'
            ],
            itemPrice: 0,
            itemOnSale: false,
            itemSaleType: null,
            itemSalePercentage: 0,
            itemSalePrice: 0,
            itemDetailContent: { // 상세 설명 관련 내용
                fullHTML: `
                    <div>
                        <p></p>
                    </div>
                `
            },
            itemPoint: 5
        },
        {
            itemID: 24,
            dateCreated: 1686893973525,
            dateModified: 1686893973525,
            userCreated: '',
            userModified: '',
            itemCategory: ['stone', 'cutting'],
            itemImage: [
                '/images/productStore/pad2.jpg' // 대표 이미지
            ],
            itemTitle: ``,
            itemDescription: ``,
            itemMaterial: [
                'Aluminum'
            ],
            itemPrice: 0,
            itemOnSale: false,
            itemSaleType: null,
            itemSalePercentage: 0,
            itemSalePrice: 0,
            itemDetailContent: { // 상세 설명 관련 내용
                fullHTML: `
                    <div>
                        <p></p>
                    </div>
                `
            },
            itemPoint: 5
        },
        {
            itemID: 25,
            dateCreated: 1686893973525,
            dateModified: 1686893973525,
            userCreated: '',
            userModified: '',
            itemCategory: ['stone', 'cutting'],
            itemImage: [
                '/images/productStore/pad3.jpg' // 대표 이미지
            ],
            itemTitle: ``,
            itemDescription: ``,
            itemMaterial: [
                'Aluminum'
            ],
            itemPrice: 0,
            itemOnSale: false,
            itemSaleType: null,
            itemSalePercentage: 0,
            itemSalePrice: 0,
            itemDetailContent: { // 상세 설명 관련 내용
                fullHTML: `
                    <div>
                        <p></p>
                    </div>
                `
            },
            itemPoint: 5
        },
        {
            itemID: 26,
            dateCreated: 1686893973525,
            dateModified: 1686893973525,
            userCreated: '',
            userModified: '',
            itemCategory: ['stone', 'cutting'],
            itemImage: [
                '/images/productStore/pad4.jpg' // 대표 이미지
            ],
            itemTitle: ``,
            itemDescription: ``,
            itemMaterial: [
                'Aluminum'
            ],
            itemPrice: 0,
            itemOnSale: false,
            itemSaleType: null,
            itemSalePercentage: 0,
            itemSalePrice: 0,
            itemDetailContent: { // 상세 설명 관련 내용
                fullHTML: `
                    <div>
                        <p></p>
                    </div>
                `
            },
            itemPoint: 5
        },
    ])

    const sortByDate = computed(() => productData.sort(function(a, b) {
        return a.dateCreated - b.dateCreated;
    }))

    const toList = computed(() => productData.value.reverse())

    return { productData, sortByDate, toList }
})