const arrForMenu = ['001', '101', '201', '301',
    '058', '158', '258', '358',
    '020', '120', '220', '320',
    '062', '162', '262', '362',
    '011', '111', '211', '311',
    '024', '124', '224', '324',
    '165', '106', '161', '123',
    '127'];

//Бумага, калька, самоклейка и др.
const dataBase = {
    '501': {
        key: '501',
        cost: 1.5,
        costAfterDiscount() {
            return (this.cost * (1 - (this.dPos + dAllPercent) / 100))
        },
        multiplicator: 1,
        dPos: 0,
        name: "Бумага А4 плотностью 80г/м2"
    },
    '502': {
        key: '502',
        cost: 2.5,
        costAfterDiscount() {
            return (this.cost * (1 - (this.dPos + dAllPercent) / 100))
        },
        multiplicator: 1,
        dPos: 0,
        name: "Бумага А4 плотностью 90г/м2"
    },
    '503': {
        key: '503',
        cost: 4.5,
        costAfterDiscount() {
            return (this.cost * (1 - (this.dPos + dAllPercent) / 100))
        },
        multiplicator: 1,
        dPos: 0,
        name: "Бумага А4 плотностью 120г/м2"
    },
    '504': {
        key: '504',
        cost: 6,
        costAfterDiscount() {
            return (this.cost * (1 - (this.dPos + dAllPercent) / 100))
        },
        multiplicator: 1,
        dPos: 0,
        name: "Бумага А4 плотностью 160г/м2"
    },
    '505': {
        key: '505',
        cost: 7.5,
        costAfterDiscount() {
            return (this.cost * (1 - (this.dPos + dAllPercent) / 100))
        },
        multiplicator: 1,
        dPos: 0,
        name: "Бумага А4 плотностью 200г/м2"
    },
    '506': {
        key: '506',
        cost: 10.5,
        costAfterDiscount() {
            return (this.cost * (1 - (this.dPos + dAllPercent) / 100))
        },
        multiplicator: 1,
        dPos: 0,
        name: "Бумага А4 плотностью 250г/м2"
    },
    '507': {
        key: '507',
        cost: 13,
        costAfterDiscount() {
            return (this.cost * (1 - (this.dPos + dAllPercent) / 100))
        },
        multiplicator: 1,
        dPos: 0,
        name: "Бумага А4 плотностью 300-350г/м2"
    },
    '508': {
        key: '508',
        cost: 6,
        costAfterDiscount() {
            return (this.cost * (1 - (this.dPos + dAllPercent) / 100))
        },
        multiplicator: 1,
        dPos: 0,
        name: "Бумага глянцевая А4 плотностью 135-170г/м2"
    },
    '509': {
        key: '509',
        cost: 10.5,
        costAfterDiscount() {
            return (this.cost * (1 - (this.dPos + dAllPercent) / 100))
        },
        multiplicator: 1,
        dPos: 0,
        name: "Бумага глянцевая А4 плотностью 200-250г/м2"
    },
    '510': {
        key: '510',
        cost: 26,
        costAfterDiscount() {
            return (this.cost * (1 - (this.dPos + dAllPercent) / 100))
        },
        multiplicator: 1,
        dPos: 0,
        name: "Бумага самоклеющаяся А4"
    },
    '511': {
        key: '511',
        cost: 3.5,
        costAfterDiscount() {
            return (this.cost * (1 - (this.dPos + dAllPercent) / 100))
        },
        multiplicator: 1,
        dPos: 0,
        name: "Бумага цветная А4 плотностью 80г/м2"
    },
    '512': {
        key: '512',
        cost: 7.5,
        costAfterDiscount() {
            return (this.cost * (1 - (this.dPos + dAllPercent) / 100))
        },
        multiplicator: 1,
        dPos: 0,
        name: "Бумага цветная А4 плотностью 120-200г/м2"
    },
    '513': {
        key: '513',
        cost: 17,
        costAfterDiscount() {
            return (this.cost * (1 - (this.dPos + dAllPercent) / 100))
        },
        multiplicator: 1,
        dPos: 0,
        name: "Калька А4"
    },
    '514': {
        key: '514',
        cost: 105,
        costAfterDiscount() {
            return (this.cost * (1 - (this.dPos + dAllPercent) / 100))
        },
        multiplicator: 1,
        dPos: 0,
        name: "Пленка А4"
    },
    '518': {
        key: '518',
        cost: 21,
        costAfterDiscount() {
            return (this.cost * (1 - (this.dPos + dAllPercent) / 100))
        },
        multiplicator: 1,
        dPos: 0,
        name: "Бумага дизайнерская А4 плотностью 100-120гр/м2"
    },
    '519': {
        key: '519',
        cost: 42,
        costAfterDiscount() {
            return (this.cost * (1 - (this.dPos + dAllPercent) / 100))
        },
        multiplicator: 1,
        dPos: 0,
        name: "Бумага дизайнерская А4 плотностью 160-300гр/м2"
    },
    '520': {
        key: '520',
        cost: 50,
        costAfterDiscount() {
            return (this.cost * (1 - (this.dPos + dAllPercent) / 100))
        },
        multiplicator: 1,
        dPos: 0,
        name: "Бумага самоклеющаяся глянцевая бумаге А4"
    },
    '521': {
        key: '521',
        cost: 3,
        costAfterDiscount() {
            return (this.cost * (1 - (this.dPos + dAllPercent) / 100))
        },
        multiplicator: 1,
        dPos: 0,
        name: "Бумага А3 плотностью 80г/м2"
    },
    '522': {
        key: '522',
        cost: 5.5,
        costAfterDiscount() {
            return (this.cost * (1 - (this.dPos + dAllPercent) / 100))
        },
        multiplicator: 1,
        dPos: 0,
        name: "Бумага А3 плотностью 90г/м2"
    },
    '523': {
        key: '523',
        cost: 8.5,
        costAfterDiscount() {
            return (this.cost * (1 - (this.dPos + dAllPercent) / 100))
        },
        multiplicator: 1,
        dPos: 0,
        name: "Бумага А3 плотностью 120г/м2"
    },
    '524': {
        key: '524',
        cost: 13,
        costAfterDiscount() {
            return (this.cost * (1 - (this.dPos + dAllPercent) / 100))
        },
        multiplicator: 1,
        dPos: 0,
        name: "Бумага А3 плотностью 160г/м2"
    },
    '525': {
        key: '525',
        cost: 15,
        costAfterDiscount() {
            return (this.cost * (1 - (this.dPos + dAllPercent) / 100))
        },
        multiplicator: 1,
        dPos: 0,
        name: "Бумага А3 плотностью 200г/м2"
    },
    '526': {
        key: '526',
        cost: 17,
        costAfterDiscount() {
            return (this.cost * (1 - (this.dPos + dAllPercent) / 100))
        },
        multiplicator: 1,
        dPos: 0,
        name: "Бумага А3 плотностью 250г/м2"
    },
    '527': {
        key: '527',
        cost: 25.5,
        costAfterDiscount() {
            return (this.cost * (1 - (this.dPos + dAllPercent) / 100))
        },
        multiplicator: 1,
        dPos: 0,
        name: "Бумага А3 плотностью 300-350г/м2"
    },
    '528': {
        key: '528',
        cost: 13,
        costAfterDiscount() {
            return (this.cost * (1 - (this.dPos + dAllPercent) / 100))
        },
        multiplicator: 1,
        dPos: 0,
        name: "Глянцевая бумага А3 плотностью 135-170г/м2"
    },
    '529': {
        key: '529',
        cost: 17,
        costAfterDiscount() {
            return (this.cost * (1 - (this.dPos + dAllPercent) / 100))
        },
        multiplicator: 1,
        dPos: 0,
        name: "Глянцевая бумага А3 плотностью 200-250г/м2"
    },
    '533': {
        key: '533',
        cost: 34,
        costAfterDiscount() {
            return (this.cost * (1 - (this.dPos + dAllPercent) / 100))
        },
        multiplicator: 1,
        dPos: 0,
        name: "Калька А3"
    },
    '535': {
        key: '535',
        cost: 7.5,
        costAfterDiscount() {
            return (this.cost * (1 - (this.dPos + dAllPercent) / 100))
        },
        multiplicator: 1,
        dPos: 0,
        name: "Бумага А3SR плотностью 80-90г/м2"
    },
    '536': {
        key: '536',
        cost: 19,
        costAfterDiscount() {
            return (this.cost * (1 - (this.dPos + dAllPercent) / 100))
        },
        multiplicator: 1,
        dPos: 0,
        name: "Бумага А3SR плотностью 120-160г/м2"
    },
    '537': {
        key: '537',
        cost: 26.5,
        costAfterDiscount() {
            return (this.cost * (1 - (this.dPos + dAllPercent) / 100))
        },
        multiplicator: 1,
        dPos: 0,
        name: "Бумага А3SR плотностью 200-350г/м2"
    },
    '538': {
        key: '538',
        cost: 38,
        costAfterDiscount() {
            return (this.cost * (1 - (this.dPos + dAllPercent) / 100))
        },
        multiplicator: 1,
        dPos: 0,
        name: "Бумага А3 плотностью 100-120гр/м2"
    },
    '539': {
        key: '539',
        cost: 76,
        costAfterDiscount() {
            return (this.cost * (1 - (this.dPos + dAllPercent) / 100))
        },
        multiplicator: 1,
        dPos: 0,
        name: "Бумага А3 плотностью 160-300гр/м2"
    },
    '540': {
        key: '540',
        cost: 210,
        costAfterDiscount() {
            return (this.cost * (1 - (this.dPos + dAllPercent) / 100))
        },
        multiplicator: 1,
        dPos: 0,
        name: "Бумага 'Touche cover' А3/A3SR плотностью 300гр/м2"
    },

    //Черно-белое копирование А4, А3

    '001': {
        key: '001',
        cost: 14,
        costAfterDiscount() {
            return (this.cost * (1 - (this.dPos + dAllPercent) / 100))
        },
        multiplicator: 1,
        dPos: 0,
        name: "Копирование А4 черно-белое одностороннее"
    },
    '002': {
        key: '002',
        cost: 12,
        costAfterDiscount() {
            return (this.cost * (1 - (this.dPos + dAllPercent) / 100))
        },
        multiplicator: 1,
        dPos: 0,
        name: "Копирование А4 черно-белое одностороннее"
    },
    '003': {
        key: '003',
        cost: 8,
        costAfterDiscount() {
            return (this.cost * (1 - (this.dPos + dAllPercent) / 100))
        },
        multiplicator: 1,
        dPos: 0,
        name: "Копирование А4 черно-белое одностороннее"
    },
    '004': {
        key: '004',
        cost: 5,
        costAfterDiscount() {
            return (this.cost * (1 - (this.dPos + dAllPercent) / 100))
        },
        multiplicator: 1,
        dPos: 0,
        name: "Копирование А4 черно-белое одностороннее"
    },
    '005': {
        key: '005',
        cost: 4,
        costAfterDiscount() {
            return (this.cost * (1 - (this.dPos + dAllPercent) / 100))
        },
        multiplicator: 1,
        dPos: 0,
        name: "Копирование А4 черно-белое одностороннее"
    },
    '006': {
        key: '006',
        cost: 3,
        costAfterDiscount() {
            return (this.cost * (1 - (this.dPos + dAllPercent) / 100))
        },
        multiplicator: 1,
        dPos: 0,
        name: "Копирование А4 черно-белое одностороннее"
    },
    '007': {
        key: '007',
        cost: 2.5,
        costAfterDiscount() {
            return (this.cost * (1 - (this.dPos + dAllPercent) / 100))
        },
        multiplicator: 1,
        dPos: 0,
        name: "Копирование А4 черно-белое одностороннее"
    },
    '008': {
        key: '008',
        cost: 19,
        costAfterDiscount() {
            return (this.cost * (1 - (this.dPos + dAllPercent) / 100))
        },
        multiplicator: 1,
        dPos: 0,
        name: "Копирование А4 черно-белое со стекла"
    },
    '011': {
        key: '011',
        cost: 20,
        costAfterDiscount() {
            return (this.cost * (1 - (this.dPos + dAllPercent) / 100))
        },
        multiplicator: 1,
        dPos: 0,
        name: "Копирование А4 черно-белое двухстороннее"
    },
    '012': {
        key: '012',
        cost: 16,
        costAfterDiscount() {
            return (this.cost * (1 - (this.dPos + dAllPercent) / 100))
        },
        multiplicator: 1,
        dPos: 0,
        name: "Копирование А4 черно-белое двухстороннее"
    },
    '013': {
        key: '013',
        cost: 12,
        costAfterDiscount() {
            return (this.cost * (1 - (this.dPos + dAllPercent) / 100))
        },
        multiplicator: 1,
        dPos: 0,
        name: "Копирование А4 черно-белое двухстороннее"
    },
    '014': {
        key: '014',
        cost: 8,
        costAfterDiscount() {
            return (this.cost * (1 - (this.dPos + dAllPercent) / 100))
        },
        multiplicator: 1,
        dPos: 0,
        name: "Копирование А4 черно-белое двухстороннее"
    },
    '015': {
        key: '015',
        cost: 6,
        costAfterDiscount() {
            return (this.cost * (1 - (this.dPos + dAllPercent) / 100))
        },
        multiplicator: 1,
        dPos: 0,
        name: "Копирование А4 черно-белое двухстороннее"
    },
    '016': {
        key: '016',
        cost: 5,
        costAfterDiscount() {
            return (this.cost * (1 - (this.dPos + dAllPercent) / 100))
        },
        multiplicator: 1,
        dPos: 0,
        name: "Копирование А4 черно-белое двухстороннее"
    },
    '017': {
        key: '017',
        cost: 4,
        costAfterDiscount() {
            return (this.cost * (1 - (this.dPos + dAllPercent) / 100))
        },
        multiplicator: 1,
        dPos: 0,
        name: "Копирование А4 черно-белое двухстороннее"
    },
    '020': {
        key: '020',
        cost: 24,
        costAfterDiscount() {
            return (this.cost * (1 - (this.dPos + dAllPercent) / 100))
        },
        multiplicator: 1,
        dPos: 0,
        name: "Копирование А3 черно-белое одностороннее"
    },
    '021': {
        key: '021',
        cost: 20,
        costAfterDiscount() {
            return (this.cost * (1 - (this.dPos + dAllPercent) / 100))
        },
        multiplicator: 1,
        dPos: 0,
        name: "Копирование А3 черно-белое одностороннее"
    },
    '022': {
        key: '022',
        cost: 14,
        costAfterDiscount() {
            return (this.cost * (1 - (this.dPos + dAllPercent) / 100))
        },
        multiplicator: 1,
        dPos: 0,
        name: "Копирование А3 черно-белое одностороннее"
    },
    '023': {
        key: '023',
        cost: 10,
        costAfterDiscount() {
            return (this.cost * (1 - (this.dPos + dAllPercent) / 100))
        },
        multiplicator: 1,
        dPos: 0,
        name: "Копирование А3 черно-белое одностороннее"
    },
    '024': {
        key: '024',
        cost: 32,
        costAfterDiscount() {
            return (this.cost * (1 - (this.dPos + dAllPercent) / 100))
        },
        multiplicator: 1,
        dPos: 0,
        name: "Копирование А3 черно-белое двухстороннее"
    },
    '025': {
        key: '025',
        cost: 28,
        costAfterDiscount() {
            return (this.cost * (1 - (this.dPos + dAllPercent) / 100))
        },
        multiplicator: 1,
        dPos: 0,
        name: "Копирование А3 черно-белое двухстороннее"
    },
    '026': {
        key: '026',
        cost: 20,
        costAfterDiscount() {
            return (this.cost * (1 - (this.dPos + dAllPercent) / 100))
        },
        multiplicator: 1,
        dPos: 0,
        name: "Копирование А3 черно-белое двухстороннее"
    },
    '027': {
        key: '027',
        cost: 16,
        costAfterDiscount() {
            return (this.cost * (1 - (this.dPos + dAllPercent) / 100))
        },
        multiplicator: 1,
        dPos: 0,
        name: "Копирование А3 черно-белое двухстороннее"
    },
    '029': {
        key: '029',
        cost: 29,
        costAfterDiscount() {
            return (this.cost * (1 - (this.dPos + dAllPercent) / 100))
        },
        multiplicator: 1,
        dPos: 0,
        name: "Копирование А3 черно-белое одностороннее со стекла"
    },

    //Черно-белая печать А4, А3, сканирование


    '101': {
        key: '101',
        cost: 14,
        costAfterDiscount() {
            return (this.cost * (1 - (this.dPos + dAllPercent) / 100))
        },
        multiplicator: 1,
        dPos: 0,
        name: "Печать А4 черно-белая односторонняя"
    },
    '102': {
        key: '102',
        cost: 12,
        costAfterDiscount() {
            return (this.cost * (1 - (this.dPos + dAllPercent) / 100))
        },
        multiplicator: 1,
        dPos: 0,
        name: "Печать А4 черно-белая односторонняя"
    },
    '103': {
        key: '103',
        cost: 8,
        costAfterDiscount() {
            return (this.cost * (1 - (this.dPos + dAllPercent) / 100))
        },
        multiplicator: 1,
        dPos: 0,
        name: "Печать А4 черно-белая односторонняя"
    },
    '104': {
        key: '104',
        cost: 5,
        costAfterDiscount() {
            return (this.cost * (1 - (this.dPos + dAllPercent) / 100))
        },
        multiplicator: 1,
        dPos: 0,
        name: "Печать А4 черно-белая односторонняя"
    },
    '105': {
        key: '105',
        cost: 4,
        costAfterDiscount() {
            return (this.cost * (1 - (this.dPos + dAllPercent) / 100))
        },
        multiplicator: 1,
        dPos: 0,
        name: "Печать А4 черно-белая односторонняя"
    },
    '106': {
        key: '106',
        cost: 3,
        costAfterDiscount() {
            return (this.cost * (1 - (this.dPos + dAllPercent) / 100))
        },
        multiplicator: 1,
        dPos: 0,
        name: "Печать А4 черно-белая односторонняя"
    },
    '107': {
        key: '107',
        cost: 2.5,
        costAfterDiscount() {
            return (this.cost * (1 - (this.dPos + dAllPercent) / 100))
        },
        multiplicator: 1,
        dPos: 0,
        name: "Печать А4 черно-белая односторонняя"
    },
    '111': {
        key: '111',
        cost: 20,
        costAfterDiscount() {
            return (this.cost * (1 - (this.dPos + dAllPercent) / 100))
        },
        multiplicator: 1,
        dPos: 0,
        name: "Печать А4 черно-белая двухсторонняя"
    },
    '112': {
        key: '112',
        cost: 16,
        costAfterDiscount() {
            return (this.cost * (1 - (this.dPos + dAllPercent) / 100))
        },
        multiplicator: 1,
        dPos: 0,
        name: "Печать А4 черно-белая двухсторонняя"
    },
    '113': {
        key: '113',
        cost: 12,
        costAfterDiscount() {
            return (this.cost * (1 - (this.dPos + dAllPercent) / 100))
        },
        multiplicator: 1,
        dPos: 0,
        name: "Печать А4 черно-белая двухсторонняя"
    },
    '114': {
        key: '114',
        cost: 8,
        costAfterDiscount() {
            return (this.cost * (1 - (this.dPos + dAllPercent) / 100))
        },
        multiplicator: 1,
        dPos: 0,
        name: "Печать А4 черно-белая двухсторонняя"
    },
    '115': {
        key: '115',
        cost: 6,
        costAfterDiscount() {
            return (this.cost * (1 - (this.dPos + dAllPercent) / 100))
        },
        multiplicator: 1,
        dPos: 0,
        name: "Печать А4 черно-белая двухсторонняя"
    },
    '116': {
        key: '116',
        cost: 5,
        costAfterDiscount() {
            return (this.cost * (1 - (this.dPos + dAllPercent) / 100))
        },
        multiplicator: 1,
        dPos: 0,
        name: "Печать А4 черно-белая двухсторонняя"
    },
    '117': {
        key: '117',
        cost: 4,
        costAfterDiscount() {
            return (this.cost * (1 - (this.dPos + dAllPercent) / 100))
        },
        multiplicator: 1,
        dPos: 0,
        name: "Печать А4 черно-белая двухсторонняя"
    },
    '120': {
        key: '120',
        cost: 24,
        costAfterDiscount() {
            return (this.cost * (1 - (this.dPos + dAllPercent) / 100))
        },
        multiplicator: 1,
        dPos: 0,
        name: "Печать А3 черно-белая односторонняя"
    },
    '121': {
        key: '121',
        cost: 20,
        costAfterDiscount() {
            return (this.cost * (1 - (this.dPos + dAllPercent) / 100))
        },
        multiplicator: 1,
        dPos: 0,
        name: "Печать А3 черно-белая односторонняя"
    },
    '122': {
        key: '122',
        cost: 14,
        costAfterDiscount() {
            return (this.cost * (1 - (this.dPos + dAllPercent) / 100))
        },
        multiplicator: 1,
        dPos: 0,
        name: "Печать А3 черно-белая односторонняя"
    },
    '123': {
        key: '123',
        cost: 10,
        costAfterDiscount() {
            return (this.cost * (1 - (this.dPos + dAllPercent) / 100))
        },
        multiplicator: 1,
        dPos: 0,
        name: "Печать А3 черно-белая односторонняя"
    },
    '124': {
        key: '124',
        cost: 32,
        costAfterDiscount() {
            return (this.cost * (1 - (this.dPos + dAllPercent) / 100))
        },
        multiplicator: 1,
        dPos: 0,
        name: "Печать А3 черно-белая двухсторонняя"
    },
    '125': {
        key: '125',
        cost: 28,
        costAfterDiscount() {
            return (this.cost * (1 - (this.dPos + dAllPercent) / 100))
        },
        multiplicator: 1,
        dPos: 0,
        name: "Печать А3 черно-белая двухсторонняя"
    },
    '126': {
        key: '126',
        cost: 20,
        costAfterDiscount() {
            return (this.cost * (1 - (this.dPos + dAllPercent) / 100))
        },
        multiplicator: 1,
        dPos: 0,
        name: "Печать А3 черно-белая двухсторонняя"
    },
    '127': {
        key: '127',
        cost: 16,
        costAfterDiscount() {
            return (this.cost * (1 - (this.dPos + dAllPercent) / 100))
        },
        multiplicator: 1,
        dPos: 0,
        name: "Печать А3 черно-белая двухсторонняя"
    },
    '128': {
        key: '128',
        cost: 80,
        costAfterDiscount() {
            return (this.cost * (1 - (this.dPos + dAllPercent) / 100))
        },
        multiplicator: 1,
        dPos: 0,
        name: "Запись на диск CD/DVD"
    },
    '130': {
        key: '130',
        cost: 15,
        costAfterDiscount() {
            return (this.cost * (1 - (this.dPos + dAllPercent) / 100))
        },
        multiplicator: 1,
        dPos: 0,
        name: "Сканирование А4 автоматическое"
    },
    '131': {
        key: '131',
        cost: 20,
        costAfterDiscount() {
            return (this.cost * (1 - (this.dPos + dAllPercent) / 100))
        },
        multiplicator: 1,
        dPos: 0,
        name: "Сканирование А3 автоматическое"
    },
    '132': {
        key: '132',
        cost: 15,
        costAfterDiscount() {
            return (this.cost * (1 - (this.dPos + dAllPercent) / 100))
        },
        multiplicator: 1,
        dPos: 0,
        name: "Распознавание текста"
    },
    '133': {
        key: '133',
        cost: 500,
        costAfterDiscount() {
            return (this.cost * (1 - (this.dPos + dAllPercent) / 100))
        },
        multiplicator: 1,
        dPos: 0,
        name: "Флеш-накопитель"
    },

    //Черно-белое копирование А4, А3 + доп. мат. 

    '201': {
        key: '201',
        cost: 14,
        costAfterDiscount() {
            return (this.cost * (1 - (this.dPos + dAllPercent) / 100))
        },
        multiplicator: 1,
        dPos: 0,
        name: "Копирование А4 черно-белое одностороннее"
    },
    '202': {
        key: '202',
        cost: 12,
        costAfterDiscount() {
            return (this.cost * (1 - (this.dPos + dAllPercent) / 100))
        },
        multiplicator: 1,
        dPos: 0,
        name: "Копирование А4 черно-белое одностороннее"
    },
    '203': {
        key: '203',
        cost: 8,
        costAfterDiscount() {
            return (this.cost * (1 - (this.dPos + dAllPercent) / 100))
        },
        multiplicator: 1,
        dPos: 0,
        name: "Копирование А4 черно-белое одностороннее"
    },
    '204': {
        key: '204',
        cost: 5,
        costAfterDiscount() {
            return (this.cost * (1 - (this.dPos + dAllPercent) / 100))
        },
        multiplicator: 1,
        dPos: 0,
        name: "Копирование А4 черно-белое одностороннее"
    },
    '205': {
        key: '205',
        cost: 4,
        costAfterDiscount() {
            return (this.cost * (1 - (this.dPos + dAllPercent) / 100))
        },
        multiplicator: 1,
        dPos: 0,
        name: "Копирование А4 черно-белое одностороннее"
    },
    '206': {
        key: '206',
        cost: 3,
        costAfterDiscount() {
            return (this.cost * (1 - (this.dPos + dAllPercent) / 100))
        },
        multiplicator: 1,
        dPos: 0,
        name: "Копирование А4 черно-белое одностороннее"
    },
    '207': {
        key: '207',
        cost: 2.5,
        costAfterDiscount() {
            return (this.cost * (1 - (this.dPos + dAllPercent) / 100))
        },
        multiplicator: 1,
        dPos: 0,
        name: "Копирование А4 черно-белое одностороннее"
    },
    '208': {
        key: '208',
        cost: 19,
        costAfterDiscount() {
            return (this.cost * (1 - (this.dPos + dAllPercent) / 100))
        },
        multiplicator: 1,
        dPos: 0,
        name: "Копирование А4 черно-белое со стекла"
    },
    '211': {
        key: '211',
        cost: 20,
        costAfterDiscount() {
            return (this.cost * (1 - (this.dPos + dAllPercent) / 100))
        },
        multiplicator: 1,
        dPos: 0,
        name: "Копирование А4 черно-белое двухстороннее"
    },
    '212': {
        key: '212',
        cost: 16,
        costAfterDiscount() {
            return (this.cost * (1 - (this.dPos + dAllPercent) / 100))
        },
        multiplicator: 1,
        dPos: 0,
        name: "Копирование А4 черно-белое двухстороннее"
    },
    '213': {
        key: '213',
        cost: 12,
        costAfterDiscount() {
            return (this.cost * (1 - (this.dPos + dAllPercent) / 100))
        },
        multiplicator: 1,
        dPos: 0,
        name: "Копирование А4 черно-белое двухстороннее"
    },
    '214': {
        key: '214',
        cost: 8,
        costAfterDiscount() {
            return (this.cost * (1 - (this.dPos + dAllPercent) / 100))
        },
        multiplicator: 1,
        dPos: 0,
        name: "Копирование А4 черно-белое двухстороннее"
    },
    '215': {
        key: '215',
        cost: 6,
        costAfterDiscount() {
            return (this.cost * (1 - (this.dPos + dAllPercent) / 100))
        },
        multiplicator: 1,
        dPos: 0,
        name: "Копирование А4 черно-белое двухстороннее"
    },
    '216': {
        key: '216',
        cost: 5,
        costAfterDiscount() {
            return (this.cost * (1 - (this.dPos + dAllPercent) / 100))
        },
        multiplicator: 1,
        dPos: 0,
        name: "Копирование А4 черно-белое двухстороннее"
    },
    '217': {
        key: '217',
        cost: 4,
        costAfterDiscount() {
            return (this.cost * (1 - (this.dPos + dAllPercent) / 100))
        },
        multiplicator: 1,
        dPos: 0,
        name: "Копирование А4 черно-белое двухстороннее"
    },
    '220': {
        key: '220',
        cost: 24,
        costAfterDiscount() {
            return (this.cost * (1 - (this.dPos + dAllPercent) / 100))
        },
        multiplicator: 1,
        dPos: 0,
        name: "Копирование А3 черно-белое одностороннее"
    },
    '221': {
        key: '221',
        cost: 20,
        costAfterDiscount() {
            return (this.cost * (1 - (this.dPos + dAllPercent) / 100))
        },
        multiplicator: 1,
        dPos: 0,
        name: "Копирование А3 черно-белое одностороннее"
    },
    '222': {
        key: '222',
        cost: 14,
        costAfterDiscount() {
            return (this.cost * (1 - (this.dPos + dAllPercent) / 100))
        },
        multiplicator: 1,
        dPos: 0,
        name: "Копирование А3 черно-белое одностороннее"
    },
    '223': {
        key: '223',
        cost: 10,
        costAfterDiscount() {
            return (this.cost * (1 - (this.dPos + dAllPercent) / 100))
        },
        multiplicator: 1,
        dPos: 0,
        name: "Копирование А3 черно-белое одностороннее"
    },
    '224': {
        key: '224',
        cost: 32,
        costAfterDiscount() {
            return (this.cost * (1 - (this.dPos + dAllPercent) / 100))
        },
        multiplicator: 1,
        dPos: 0,
        name: "Копирование А3 черно-белое двухстороннее"
    },
    '225': {
        key: '225',
        cost: 28,
        costAfterDiscount() {
            return (this.cost * (1 - (this.dPos + dAllPercent) / 100))
        },
        multiplicator: 1,
        dPos: 0,
        name: "Копирование А3 черно-белое двухстороннее"
    },
    '226': {
        key: '226',
        cost: 20,
        costAfterDiscount() {
            return (this.cost * (1 - (this.dPos + dAllPercent) / 100))
        },
        multiplicator: 1,
        dPos: 0,
        name: "Копирование А3 черно-белое двухстороннее"
    },
    '227': {
        key: '227',
        cost: 16,
        costAfterDiscount() {
            return (this.cost * (1 - (this.dPos + dAllPercent) / 100))
        },
        multiplicator: 1,
        dPos: 0,
        name: "Копирование А3 черно-белое двухстороннее"
    },
    '229': {
        key: '229',
        cost: 29,
        costAfterDiscount() {
            return (this.cost * (1 - (this.dPos + dAllPercent) / 100))
        },
        multiplicator: 1,
        dPos: 0,
        name: "Копирование А3 черно-белое одностороннее со стекла"
    },

    //Черно-белая печать А4, А3 + доп. мат.

    '301': {
        key: '301',
        cost: 14,
        costAfterDiscount() {
            return (this.cost * (1 - (this.dPos + dAllPercent) / 100))
        },
        multiplicator: 1,
        dPos: 0,
        name: "Печать А4 черно-белая односторонняя"
    },
    '302': {
        key: '302',
        cost: 12,
        costAfterDiscount() {
            return (this.cost * (1 - (this.dPos + dAllPercent) / 100))
        },
        multiplicator: 1,
        dPos: 0,
        name: "Печать А4 черно-белая односторонняя"
    },
    '303': {
        key: '303',
        cost: 8,
        costAfterDiscount() {
            return (this.cost * (1 - (this.dPos + dAllPercent) / 100))
        },
        multiplicator: 1,
        dPos: 0,
        name: "Печать А4 черно-белая односторонняя"
    },
    '304': {
        key: '304',
        cost: 5,
        costAfterDiscount() {
            return (this.cost * (1 - (this.dPos + dAllPercent) / 100))
        },
        multiplicator: 1,
        dPos: 0,
        name: "Печать А4 черно-белая односторонняя"
    },
    '305': {
        key: '305',
        cost: 4,
        costAfterDiscount() {
            return (this.cost * (1 - (this.dPos + dAllPercent) / 100))
        },
        multiplicator: 1,
        dPos: 0,
        name: "Печать А4 черно-белая односторонняя"
    },
    '306': {
        key: '306',
        cost: 3,
        costAfterDiscount() {
            return (this.cost * (1 - (this.dPos + dAllPercent) / 100))
        },
        multiplicator: 1,
        dPos: 0,
        name: "Печать А4 черно-белая односторонняя"
    },
    '307': {
        key: '307',
        cost: 2.5,
        costAfterDiscount() {
            return (this.cost * (1 - (this.dPos + dAllPercent) / 100))
        },
        multiplicator: 1,
        dPos: 0,
        name: "Печать А4 черно-белая односторонняя"
    },
    '311': {
        key: '311',
        cost: 20,
        costAfterDiscount() {
            return (this.cost * (1 - (this.dPos + dAllPercent) / 100))
        },
        multiplicator: 1,
        dPos: 0,
        name: "Печать А4 черно-белая двухсторонняя"
    },
    '312': {
        key: '312',
        cost: 16,
        costAfterDiscount() {
            return (this.cost * (1 - (this.dPos + dAllPercent) / 100))
        },
        multiplicator: 1,
        dPos: 0,
        name: "Печать А4 черно-белая двухсторонняя"
    },
    '313': {
        key: '313',
        cost: 12,
        costAfterDiscount() {
            return (this.cost * (1 - (this.dPos + dAllPercent) / 100))
        },
        multiplicator: 1,
        dPos: 0,
        name: "Печать А4 черно-белая двухсторонняя"
    },
    '314': {
        key: '314',
        cost: 8,
        costAfterDiscount() {
            return (this.cost * (1 - (this.dPos + dAllPercent) / 100))
        },
        multiplicator: 1,
        dPos: 0,
        name: "Печать А4 черно-белая двухсторонняя"
    },
    '315': {
        key: '315',
        cost: 6,
        costAfterDiscount() {
            return (this.cost * (1 - (this.dPos + dAllPercent) / 100))
        },
        multiplicator: 1,
        dPos: 0,
        name: "Печать А4 черно-белая двухсторонняя"
    },
    '316': {
        key: '316',
        cost: 5,
        costAfterDiscount() {
            return (this.cost * (1 - (this.dPos + dAllPercent) / 100))
        },
        multiplicator: 1,
        dPos: 0,
        name: "Печать А4 черно-белая двухсторонняя"
    },
    '317': {
        key: '317',
        cost: 4,
        costAfterDiscount() {
            return (this.cost * (1 - (this.dPos + dAllPercent) / 100))
        },
        multiplicator: 1,
        dPos: 0,
        name: "Печать А4 черно-белая двухсторонняя"
    },
    '320': {
        key: '320',
        cost: 24,
        costAfterDiscount() {
            return (this.cost * (1 - (this.dPos + dAllPercent) / 100))
        },
        multiplicator: 1,
        dPos: 0,
        name: "Печать А3 черно-белая односторонняя"
    },
    '321': {
        key: '321',
        cost: 20,
        costAfterDiscount() {
            return (this.cost * (1 - (this.dPos + dAllPercent) / 100))
        },
        multiplicator: 1,
        dPos: 0,
        name: "Печать А3 черно-белая односторонняя"
    },
    '322': {
        key: '322',
        cost: 14,
        costAfterDiscount() {
            return (this.cost * (1 - (this.dPos + dAllPercent) / 100))
        },
        multiplicator: 1,
        dPos: 0,
        name: "Печать А3 черно-белая односторонняя"
    },
    '323': {
        key: '323',
        cost: 10,
        costAfterDiscount() {
            return (this.cost * (1 - (this.dPos + dAllPercent) / 100))
        },
        multiplicator: 1,
        dPos: 0,
        name: "Печать А3 черно-белая односторонняя"
    },
    '324': {
        key: '324',
        cost: 32,
        costAfterDiscount() {
            return (this.cost * (1 - (this.dPos + dAllPercent) / 100))
        },
        multiplicator: 1,
        dPos: 0,
        name: "Печать А3 черно-белая двухсторонняя"
    },
    '325': {
        key: '325',
        cost: 28,
        costAfterDiscount() {
            return (this.cost * (1 - (this.dPos + dAllPercent) / 100))
        },
        multiplicator: 1,
        dPos: 0,
        name: "Печать А3 черно-белая двухсторонняя"
    },
    '326': {
        key: '326',
        cost: 20,
        costAfterDiscount() {
            return (this.cost * (1 - (this.dPos + dAllPercent) / 100))
        },
        multiplicator: 1,
        dPos: 0,
        name: "Печать А3 черно-белая двухсторонняя"
    },
    '327': {
        key: '327',
        cost: 16,
        costAfterDiscount() {
            return (this.cost * (1 - (this.dPos + dAllPercent) / 100))
        },
        multiplicator: 1,
        dPos: 0,
        name: "Печать А3 черно-белая двухсторонняя"
    },

    //Цветное копирование А4, А3

    '058': {
        key: '058',
        cost: 36,
        costAfterDiscount() {
            return (this.cost * (1 - (this.dPos + dAllPercent) / 100))
        },
        multiplicator: 1,
        dPos: 0,
        name: "Копирование А4 цветное"
    },
    '060': {
        key: '060',
        cost: 28,
        costAfterDiscount() {
            return (this.cost * (1 - (this.dPos + dAllPercent) / 100))
        },
        multiplicator: 1,
        dPos: 0,
        name: "Копирование А4 цветное"
    },
    '061': {
        key: '061',
        cost: 25,
        costAfterDiscount() {
            return (this.cost * (1 - (this.dPos + dAllPercent) / 100))
        },
        multiplicator: 1,
        dPos: 0,
        name: "Копирование А4 цветное"
    },
    '062': {
        key: '062',
        cost: 72,
        costAfterDiscount() {
            return (this.cost * (1 - (this.dPos + dAllPercent) / 100))
        },
        multiplicator: 1,
        dPos: 0,
        name: "Копирование А3 цветное"
    },
    '064': {
        key: '064',
        cost: 56,
        costAfterDiscount() {
            return (this.cost * (1 - (this.dPos + dAllPercent) / 100))
        },
        multiplicator: 1,
        dPos: 0,
        name: "Копирование А3 цветное"
    },
    '065': {
        key: '065',
        cost: 50,
        costAfterDiscount() {
            return (this.cost * (1 - (this.dPos + dAllPercent) / 100))
        },
        multiplicator: 1,
        dPos: 0,
        name: "Копирование А3 цветное"
    },

    //Цветная печать А4, А3, сканирование

    '158': {
        key: '158',
        cost: 36,
        costAfterDiscount() {
            return (this.cost * (1 - (this.dPos + dAllPercent) / 100))
        },
        multiplicator: 1,
        dPos: 0,
        name: "Печать А4 цветная"
    },
    '160': {
        key: '160',
        cost: 28,
        costAfterDiscount() {
            return (this.cost * (1 - (this.dPos + dAllPercent) / 100))
        },
        multiplicator: 1,
        dPos: 0,
        name: "Печать А4 цветная"
    },
    '161': {
        key: '161',
        cost: 25,
        costAfterDiscount() {
            return (this.cost * (1 - (this.dPos + dAllPercent) / 100))
        },
        multiplicator: 1,
        dPos: 0,
        name: "Печать А4 цветная"
    },
    '162': {
        key: '162',
        cost: 72,
        costAfterDiscount() {
            return (this.cost * (1 - (this.dPos + dAllPercent) / 100))
        },
        multiplicator: 1,
        dPos: 0,
        name: "Печать А3 цветная"
    },
    '164': {
        key: '164',
        cost: 56,
        costAfterDiscount() {
            return (this.cost * (1 - (this.dPos + dAllPercent) / 100))
        },
        multiplicator: 1,
        dPos: 0,
        name: "Печать А3 цветная"
    },
    '165': {
        key: '165',
        cost: 50,
        costAfterDiscount() {
            return (this.cost * (1 - (this.dPos + dAllPercent) / 100))
        },
        multiplicator: 1,
        dPos: 0,
        name: "Печать А3 цветная"
    },
    '167': {
        key: '167',
        cost: 20,
        costAfterDiscount() {
            return (this.cost * (1 - (this.dPos + dAllPercent) / 100))
        },
        multiplicator: 1,
        dPos: 0,
        name: "Сканирование А4 ручное"
    },
    '168': {
        key: '168',
        cost: 40,
        costAfterDiscount() {
            return (this.cost * (1 - (this.dPos + dAllPercent) / 100))
        },
        multiplicator: 1,
        dPos: 0,
        name: "Сканирование А4 ручное"
    },

    //Цветное копирование А4, А3 + доп. мат.

    '258': {
        key: '258',
        cost: 36,
        costAfterDiscount() {
            return (this.cost * (1 - (this.dPos + dAllPercent) / 100))
        },
        multiplicator: 1,
        dPos: 0,
        name: "Копирование А4 цветное"
    },
    '260': {
        key: '260',
        cost: 28,
        costAfterDiscount() {
            return (this.cost * (1 - (this.dPos + dAllPercent) / 100))
        },
        multiplicator: 1,
        dPos: 0,
        name: "Копирование А4 цветное"
    },
    '261': {
        key: '261',
        cost: 25,
        costAfterDiscount() {
            return (this.cost * (1 - (this.dPos + dAllPercent) / 100))
        },
        multiplicator: 1,
        dPos: 0,
        name: "Копирование А4 цветное"
    },
    '262': {
        key: '262',
        cost: 72,
        costAfterDiscount() {
            return (this.cost * (1 - (this.dPos + dAllPercent) / 100))
        },
        multiplicator: 1,
        dPos: 0,
        name: "Копирование А3 цветное"
    },
    '264': {
        key: '264',
        cost: 56,
        costAfterDiscount() {
            return (this.cost * (1 - (this.dPos + dAllPercent) / 100))
        },
        multiplicator: 1,
        dPos: 0,
        name: "Копирование А3 цветное"
    },
    '265': {
        key: '265',
        cost: 50,
        costAfterDiscount() {
            return (this.cost * (1 - (this.dPos + dAllPercent) / 100))
        },
        multiplicator: 1,
        dPos: 0,
        name: "Копирование А3 цветное"
    },

    //Цветная печать А4, А3 + доп. мат.

    '358': {
        key: '358',
        cost: 36,
        costAfterDiscount() {
            return (this.cost * (1 - (this.dPos + dAllPercent) / 100))
        },
        multiplicator: 1,
        dPos: 0,
        name: "Печать А4 цветная"
    },
    '360': {
        key: '360',
        cost: 28,
        costAfterDiscount() {
            return (this.cost * (1 - (this.dPos + dAllPercent) / 100))
        },
        multiplicator: 1,
        dPos: 0,
        name: "Печать А4 цветная"
    },
    '361': {
        key: '361',
        cost: 25,
        costAfterDiscount() {
            return (this.cost * (1 - (this.dPos + dAllPercent) / 100))
        },
        multiplicator: 1,
        dPos: 0,
        name: "Печать А4 цветная"
    },
    '362': {
        key: '362',
        cost: 72,
        costAfterDiscount() {
            return (this.cost * (1 - (this.dPos + dAllPercent) / 100))
        },
        multiplicator: 1,
        dPos: 0,
        name: "Печать А3 цветная"
    },
    '364': {
        key: '364',
        cost: 56,
        costAfterDiscount() {
            return (this.cost * (1 - (this.dPos + dAllPercent) / 100))
        },
        multiplicator: 1,
        dPos: 0,
        name: "Печать А3 цветная"
    },
    '365': {
        key: '365',
        cost: 50,
        costAfterDiscount() {
            return (this.cost * (1 - (this.dPos + dAllPercent) / 100))
        },
        multiplicator: 1,
        dPos: 0,
        name: "Печать А3 цветная"
    },

    //Самообслуживание

    '040': {
        key: '040',
        cost: 7,
        costAfterDiscount() {
            return (this.cost * (1 - (this.dPos + dAllPercent) / 100))
        },
        multiplicator: 1,
        dPos: 0,
        name: "Копирование/печать А4 ч/б самообсл."
    },
    '044': {
        key: '044',
        cost: 20,
        costAfterDiscount() {
            return (this.cost * (1 - (this.dPos + dAllPercent) / 100))
        },
        multiplicator: 1,
        dPos: 0,
        name: "Копирование/печать А4 цв самообсл."
    },
    '045': {
        key: '045',
        cost: 40,
        costAfterDiscount() {
            return (this.cost * (1 - (this.dPos + dAllPercent) / 100))
        },
        multiplicator: 1,
        dPos: 0,
        name: "Копирование/печать А3 цв самообсл."
    },
    '046': {
        key: '046',
        cost: 13,
        costAfterDiscount() {
            return (this.cost * (1 - (this.dPos + dAllPercent) / 100))
        },
        multiplicator: 1,
        dPos: 0,
        name: "Копирование/печать А3 ч/б самообсл."
    },
    '050': {
        key: '050',
        cost: 50,
        costAfterDiscount() {
            return (this.cost * (1 - (this.dPos + dAllPercent) / 100))
        },
        multiplicator: 1,
        dPos: 0,
        name: "Использование комп. с/о до 15 мин."
    },
    '051': {
        key: '051',
        cost: 100,
        costAfterDiscount() {
            return (this.cost * (1 - (this.dPos + dAllPercent) / 100))
        },
        multiplicator: 1,
        dPos: 0,
        name: "Использование комп. с/о более 15 мин."
    },

    //Пенокартон

    '150': {
        key: '150',
        cost: 1700,
        costAfterDiscount() {
            return (this.cost * (1 - (this.dPos + dAllPercent) / 100))
        },
        multiplicator: 1,
        dPos: 0,
        name: "Накатка на пенокартон А0 (до 100х140)"
    },
    '151': {
        key: '151',
        cost: 900,
        costAfterDiscount() {
            return (this.cost * (1 - (this.dPos + dAllPercent) / 100))
        },
        multiplicator: 1,
        dPos: 0,
        name: "Накатка на пенокартон А0 (до 70х100)"
    },
    '152': {
        key: '152',
        cost: 500,
        costAfterDiscount() {
            return (this.cost * (1 - (this.dPos + dAllPercent) / 100))
        },
        multiplicator: 1,
        dPos: 0,
        name: "Накатка на пенокартон А0 (до 50х70)"
    },
    '153': {
        key: '153',
        cost: 300,
        costAfterDiscount() {
            return (this.cost * (1 - (this.dPos + dAllPercent) / 100))
        },
        multiplicator: 1,
        dPos: 0,
        name: "Накатка на пенокартон А0 (до 35х50)"
    },

    //Обложки

    '580': {
        key: '580',
        cost: 35,
        costAfterDiscount() {
            return (this.cost * (1 - (this.dPos + dAllPercent) / 100))
        },
        multiplicator: 1,
        dPos: 0,
        name: 'Обложка А4 "кожа"'
    },
    '581': {
        key: '581',
        cost: 30,
        costAfterDiscount() {
            return (this.cost * (1 - (this.dPos + dAllPercent) / 100))
        },
        multiplicator: 1,
        dPos: 0,
        name: 'Обложка А4 глянц.'
    },
    '582': {
        key: '582',
        cost: 45,
        costAfterDiscount() {
            return (this.cost * (1 - (this.dPos + dAllPercent) / 100))
        },
        multiplicator: 1,
        dPos: 0,
        name: 'Обложка А3 "кожа"'
    },
    '583': {
        key: '583',
        cost: 35,
        costAfterDiscount() {
            return (this.cost * (1 - (this.dPos + dAllPercent) / 100))
        },
        multiplicator: 1,
        dPos: 0,
        name: 'Обложка А4 "прозрачная"'
    },
    '584': {
        key: '584',
        cost: 45,
        costAfterDiscount() {
            return (this.cost * (1 - (this.dPos + dAllPercent) / 100))
        },
        multiplicator: 1,
        dPos: 0,
        name: 'Обложка А3 "прозрачная"'
    },
    '585': {
        key: '585',
        cost: 30,
        costAfterDiscount() {
            return (this.cost * (1 - (this.dPos + dAllPercent) / 100))
        },
        multiplicator: 1,
        dPos: 0,
        name: 'Обложка А4 тонированная'
    },
    '588': {
        key: '588',
        cost: 55,
        costAfterDiscount() {
            return (this.cost * (1 - (this.dPos + dAllPercent) / 100))
        },
        multiplicator: 1,
        dPos: 0,
        name: 'Упаковка книг в прозрачн. обложку Стандарт'
    },
    '589': {
        key: '589',
        cost: 55,
        costAfterDiscount() {
            return (this.cost * (1 - (this.dPos + dAllPercent) / 100))
        },
        multiplicator: 1,
        dPos: 0,
        name: 'Упаковка книг в прозрачн. обложку Мини'
    },

    //Переплет

    '401': {
        key: '401',
        cost: 35,
        costAfterDiscount() {
            return (this.cost * (1 - (this.dPos + dAllPercent) / 100))
        },
        multiplicator: 1,
        dPos: 0,
        name: 'Металлическая спираль 3/16"'
    },
    '402': {
        key: '402',
        cost: 40,
        costAfterDiscount() {
            return (this.cost * (1 - (this.dPos + dAllPercent) / 100))
        },
        multiplicator: 1,
        dPos: 0,
        name: 'Металлическая спираль 1/4"'
    },
    '403': {
        key: '403',
        cost: 45,
        costAfterDiscount() {
            return (this.cost * (1 - (this.dPos + dAllPercent) / 100))
        },
        multiplicator: 1,
        dPos: 0,
        name: 'Металлическая спираль 5/16"'
    },
    '404': {
        key: '404',
        cost: 50,
        costAfterDiscount() {
            return (this.cost * (1 - (this.dPos + dAllPercent) / 100))
        },
        multiplicator: 1,
        dPos: 0,
        name: 'Металлическая спираль 3/8"'
    },
    '405': {
        key: '405',
        cost: 55,
        costAfterDiscount() {
            return (this.cost * (1 - (this.dPos + dAllPercent) / 100))
        },
        multiplicator: 1,
        dPos: 0,
        name: 'Металлическая спираль 4/16"'
    },
    '406': {
        key: '406',
        cost: 60,
        costAfterDiscount() {
            return (this.cost * (1 - (this.dPos + dAllPercent) / 100))
        },
        multiplicator: 1,
        dPos: 0,
        name: 'Металлическая спираль 1/2"'
    },
    '407': {
        key: '407',
        cost: 65,
        costAfterDiscount() {
            return (this.cost * (1 - (this.dPos + dAllPercent) / 100))
        },
        multiplicator: 1,
        dPos: 0,
        name: 'Металлическая спираль 9/16"'
    },
    '408': {
        key: '408',
        cost: 70,
        costAfterDiscount() {
            return (this.cost * (1 - (this.dPos + dAllPercent) / 100))
        },
        multiplicator: 1,
        dPos: 0,
        name: 'Металлическая спираль 1"'
    },
    '410': {
        key: '410',
        cost: 30,
        costAfterDiscount() {
            return (this.cost * (1 - (this.dPos + dAllPercent) / 100))
        },
        multiplicator: 1,
        dPos: 0,
        name: 'Пластиковая спираль 6 мм'
    },
    '411': {
        key: '411',
        cost: 32,
        costAfterDiscount() {
            return (this.cost * (1 - (this.dPos + dAllPercent) / 100))
        },
        multiplicator: 1,
        dPos: 0,
        name: 'Пластиковая спираль 8 мм'
    },
    '412': {
        key: '412',
        cost: 35,
        costAfterDiscount() {
            return (this.cost * (1 - (this.dPos + dAllPercent) / 100))
        },
        multiplicator: 1,
        dPos: 0,
        name: 'Пластиковая спираль 10 мм'
    },
    '413': {
        key: '413',
        cost: 38,
        costAfterDiscount() {
            return (this.cost * (1 - (this.dPos + dAllPercent) / 100))
        },
        multiplicator: 1,
        dPos: 0,
        name: 'Пластиковая спираль 12 мм'
    },
    '414': {
        key: '414',
        cost: 40,
        costAfterDiscount() {
            return (this.cost * (1 - (this.dPos + dAllPercent) / 100))
        },
        multiplicator: 1,
        dPos: 0,
        name: 'Пластиковая спираль 16 мм'
    },
    '416': {
        key: '416',
        cost: 45,
        costAfterDiscount() {
            return (this.cost * (1 - (this.dPos + dAllPercent) / 100))
        },
        multiplicator: 1,
        dPos: 0,
        name: 'Пластиковая спираль 20 мм'
    },
    '417': {
        key: '417',
        cost: 48,
        costAfterDiscount() {
            return (this.cost * (1 - (this.dPos + dAllPercent) / 100))
        },
        multiplicator: 1,
        dPos: 0,
        name: 'Пластиковая спираль 22 мм'
    },
    '418': {
        key: '418',
        cost: 50,
        costAfterDiscount() {
            return (this.cost * (1 - (this.dPos + dAllPercent) / 100))
        },
        multiplicator: 1,
        dPos: 0,
        name: 'Пластиковая спираль 25 мм'
    },
    '419': {
        key: '419',
        cost: 52,
        costAfterDiscount() {
            return (this.cost * (1 - (this.dPos + dAllPercent) / 100))
        },
        multiplicator: 1,
        dPos: 0,
        name: 'Пластиковая спираль 28 мм'
    },
    '420': {
        key: '420',
        cost: 55,
        costAfterDiscount() {
            return (this.cost * (1 - (this.dPos + dAllPercent) / 100))
        },
        multiplicator: 1,
        dPos: 0,
        name: 'Пластиковая спираль 32 мм'
    },
    '421': {
        key: '421',
        cost: 58,
        costAfterDiscount() {
            return (this.cost * (1 - (this.dPos + dAllPercent) / 100))
        },
        multiplicator: 1,
        dPos: 0,
        name: 'Пластиковая спираль 38 мм'
    },
    '422': {
        key: '422',
        cost: 60,
        costAfterDiscount() {
            return (this.cost * (1 - (this.dPos + dAllPercent) / 100))
        },
        multiplicator: 1,
        dPos: 0,
        name: 'Пластиковая спираль 45 мм'
    },
    '424': {
        key: '424',
        cost: 70,
        costAfterDiscount() {
            return (this.cost * (1 - (this.dPos + dAllPercent) / 100))
        },
        multiplicator: 1,
        dPos: 0,
        name: 'Пластиковая спираль 52 мм'
    },
    '430': {
        key: '430',
        cost: null,
        costAfterDiscount() {
            return (this.cost * (1 - (this.dPos + dAllPercent) / 100))
        },
        multiplicator: 1,
        dPos: 0,
        name: 'Навивная пружина 6 мм'
    },
    '431': {
        key: '431',
        cost: 60,
        costAfterDiscount() {
            return (this.cost * (1 - (this.dPos + dAllPercent) / 100))
        },
        multiplicator: 1,
        dPos: 0,
        name: 'Навивная пружина 8 мм'
    },
    '432': {
        key: '432',
        cost: 65,
        costAfterDiscount() {
            return (this.cost * (1 - (this.dPos + dAllPercent) / 100))
        },
        multiplicator: 1,
        dPos: 0,
        name: 'Навивная пружина 10 мм'
    },
    '433': {
        key: '433',
        cost: null,
        costAfterDiscount() {
            return (this.cost * (1 - (this.dPos + dAllPercent) / 100))
        },
        multiplicator: 1,
        dPos: 0,
        name: 'Навивная пружина 12 мм'
    },
    '434': {
        key: '434',
        cost: 75,
        costAfterDiscount() {
            return (this.cost * (1 - (this.dPos + dAllPercent) / 100))
        },
        multiplicator: 1,
        dPos: 0,
        name: 'Навивная пружина 14 мм'
    },
    '435': {
        key: '435',
        cost: 85,
        costAfterDiscount() {
            return (this.cost * (1 - (this.dPos + dAllPercent) / 100))
        },
        multiplicator: 1,
        dPos: 0,
        name: 'Навивная пружина 20 мм'
    },
    '436': {
        key: '436',
        cost: null,
        costAfterDiscount() {
            return (this.cost * (1 - (this.dPos + dAllPercent) / 100))
        },
        multiplicator: 1,
        dPos: 0,
        name: 'Навивная пружина 23 мм'
    },

    //Ламинирование 

    '460': {
        key: '460',
        cost: 120,
        costAfterDiscount() {
            return (this.cost * (1 - (this.dPos + dAllPercent) / 100))
        },
        multiplicator: 1,
        dPos: 0,
        name: 'Ламинирование А3 глянцевое'
    },
    '461': {
        key: '461',
        cost: 120,
        costAfterDiscount() {
            return (this.cost * (1 - (this.dPos + dAllPercent) / 100))
        },
        multiplicator: 1,
        dPos: 0,
        name: 'Ламинирование А3 матовое'
    },
    '462': {
        key: '462',
        cost: 150,
        costAfterDiscount() {
            return (this.cost * (1 - (this.dPos + dAllPercent) / 100))
        },
        multiplicator: 1,
        dPos: 0,
        name: 'Ламинирование А3 самокл.'
    },
    '463': {
        key: '463',
        cost: 70,
        costAfterDiscount() {
            return (this.cost * (1 - (this.dPos + dAllPercent) / 100))
        },
        multiplicator: 1,
        dPos: 0,
        name: 'Ламинирование А4 глянцевое'
    },
    '464': {
        key: '464',
        cost: 70,
        costAfterDiscount() {
            return (this.cost * (1 - (this.dPos + dAllPercent) / 100))
        },
        multiplicator: 1,
        dPos: 0,
        name: 'Ламинирование А4 матовое'
    },
    '465': {
        key: '465',
        cost: 100,
        costAfterDiscount() {
            return (this.cost * (1 - (this.dPos + dAllPercent) / 100))
        },
        multiplicator: 1,
        dPos: 0,
        name: 'Ламинирование А4 самокл.'
    },
    '466': {
        key: '466',
        cost: 40,
        costAfterDiscount() {
            return (this.cost * (1 - (this.dPos + dAllPercent) / 100))
        },
        multiplicator: 1,
        dPos: 0,
        name: 'Ламинирование А5 глянцевое'
    },
    '467': {
        key: '467',
        cost: 40,
        costAfterDiscount() {
            return (this.cost * (1 - (this.dPos + dAllPercent) / 100))
        },
        multiplicator: 1,
        dPos: 0,
        name: 'Ламинирование А5 матовая'
    },
    '469': {
        key: '469',
        cost: 30,
        costAfterDiscount() {
            return (this.cost * (1 - (this.dPos + dAllPercent) / 100))
        },
        multiplicator: 1,
        dPos: 0,
        name: 'Ламинирование А6 и меньше глянцевое'
    },
    '470': {
        key: '470',
        cost: 30,
        costAfterDiscount() {
            return (this.cost * (1 - (this.dPos + dAllPercent) / 100))
        },
        multiplicator: 1,
        dPos: 0,
        name: 'Ламинирование А6 и меньше матовое'
    },
    '480': {
        key: '480',
        cost: 6,
        costAfterDiscount() {
            return (this.cost * (1 - (this.dPos + dAllPercent) / 100))
        },
        multiplicator: 1,
        dPos: 0,
        name: 'Ламинация рулонная'
    },

    //Копирование больших форматов ч/б

    '070': {
        key: '070',
        cost: 0.9,
        costAfterDiscount() {
            return (this.cost * (1 - (this.dPos + dAllPercent) / 100))
        },
        multiplicator: 1,
        dPos: 0,
        name: 'Копирование ч/б 841/914мм пог. см бумага'
    },
    '071': {
        key: '071',
        cost: 0.8,
        costAfterDiscount() {
            return (this.cost * (1 - (this.dPos + dAllPercent) / 100))
        },
        multiplicator: 1,
        dPos: 0,
        name: 'Копирование ч/б 594мм пог. см бумага'
    },
    '074': {
        key: '074',
        cost: 3.5,
        costAfterDiscount() {
            return (this.cost * (1 - (this.dPos + dAllPercent) / 100))
        },
        multiplicator: 1,
        dPos: 0,
        name: 'Копирование ч/б 914мм пог. см калька'
    },
    '080': {
        key: '080',
        cost: 20,
        costAfterDiscount() {
            return (this.cost * (1 - (this.dPos + dAllPercent) / 100))
        },
        multiplicator: 1,
        dPos: 0,
        name: 'Масштабирование (за операцию)'
    },
    '081': {
        key: '081',
        cost: 20,
        costAfterDiscount() {
            return (this.cost * (1 - (this.dPos + dAllPercent) / 100))
        },
        multiplicator: 1,
        dPos: 0,
        name: 'Доплата за экстра тонер (заливку)'
    },

    //Печать больших форматов ч/б

    '170': {
        key: '170',
        cost: 0.9,
        costAfterDiscount() {
            return (this.cost * (1 - (this.dPos + dAllPercent) / 100))
        },
        multiplicator: 1,
        dPos: 0,
        name: 'Печать ч/б 841/914мм пог. см бумага'
    },
    '171': {
        key: '171',
        cost: 0.8,
        costAfterDiscount() {
            return (this.cost * (1 - (this.dPos + dAllPercent) / 100))
        },
        multiplicator: 1,
        dPos: 0,
        name: 'Печать ч/б 594мм пог. см бумага'
    },
    '174': {
        key: '074',
        cost: 3.5,
        costAfterDiscount() {
            return (this.cost * (1 - (this.dPos + dAllPercent) / 100))
        },
        multiplicator: 1,
        dPos: 0,
        name: 'Печать ч/б 914мм пог. см калька'
    },

    //Печать/копия БФ цвет

    '190': {
        key: '190',
        cost: 7.5,
        costAfterDiscount() {
            return (this.cost * (1 - (this.dPos + dAllPercent) / 100))
        },
        multiplicator: 1,
        dPos: 0,
        name: 'Печать цв. матовая бумага пог. см'
    },
    '191': {
        key: '191',
        cost: 11,
        costAfterDiscount() {
            return (this.cost * (1 - (this.dPos + dAllPercent) / 100))
        },
        multiplicator: 1,
        dPos: 0,
        name: 'Печать цв. глянцевая бумага пог. см'
    },
    '192': {
        key: '192',
        cost: 5.5,
        costAfterDiscount() {
            return (this.cost * (1 - (this.dPos + dAllPercent) / 100))
        },
        multiplicator: 1,
        dPos: 0,
        name: 'Печать цв. инженерная бумага пог. см'
    },
    '193': {
        key: '193',
        cost: 10,
        costAfterDiscount() {
            return (this.cost * (1 - (this.dPos + dAllPercent) / 100))
        },
        multiplicator: 1,
        dPos: 0,
        name: 'Печать цв. самокл. бумага пог. см'
    },
    '194': {
        key: '194',
        cost: 25,
        costAfterDiscount() {
            return (this.cost * (1 - (this.dPos + dAllPercent) / 100))
        },
        multiplicator: 1,
        dPos: 0,
        name: 'Печать цв. холст пог. см'
    },
    '195': {
        key: '195',
        cost: 2,
        costAfterDiscount() {
            return (this.cost * (1 - (this.dPos + dAllPercent) / 100))
        },
        multiplicator: 1,
        dPos: 0,
        name: 'Доплата за заливку за пог. см'
    },
    '196': {
        key: '196',
        cost: 11,
        costAfterDiscount() {
            return (this.cost * (1 - (this.dPos + dAllPercent) / 100))
        },
        multiplicator: 1,
        dPos: 0,
        name: 'Печать цв. калька пог. см'
    },
    '197': {
        key: '197',
        cost: 13,
        costAfterDiscount() {
            return (this.cost * (1 - (this.dPos + dAllPercent) / 100))
        },
        multiplicator: 1,
        dPos: 0,
        name: 'Печать цв. самокл. полипропилен пог. см'
    },
    '198': {
        key: '198',
        cost: 20,
        costAfterDiscount() {
            return (this.cost * (1 - (this.dPos + dAllPercent) / 100))
        },
        multiplicator: 1,
        dPos: 0,
        name: 'Печать цв. самокл. винил пог. см'
    },

    //Печать/копия Б/Ф цвет Сухаревская

    '140': {
        key: '140',
        cost: 11,
        costAfterDiscount() {
            return (this.cost * (1 - (this.dPos + dAllPercent) / 100))
        },
        multiplicator: 1,
        dPos: 0,
        name: 'Печать цв. матовая бумага пог. см'
    },
    '141': {
        key: '141',
        cost: 16.5,
        costAfterDiscount() {
            return (this.cost * (1 - (this.dPos + dAllPercent) / 100))
        },
        multiplicator: 1,
        dPos: 0,
        name: 'Печать цв. глянцевая бумага пог. см'
    },
    '142': {
        key: '142',
        cost: 8.5,
        costAfterDiscount() {
            return (this.cost * (1 - (this.dPos + dAllPercent) / 100))
        },
        multiplicator: 1,
        dPos: 0,
        name: 'Печать цв. инженерная бумага пог. см'
    },
    '143': {
        key: '143',
        cost: 19.5,
        costAfterDiscount() {
            return (this.cost * (1 - (this.dPos + dAllPercent) / 100))
        },
        multiplicator: 1,
        dPos: 0,
        name: 'Печать цв. самокл. бумага пог. см'
    },

    //Печать/копия Б/Ф HP2300 & HP4000 

    '145': {
        key: '145',
        cost: 2,
        costAfterDiscount() {
            return (this.cost * (1 - (this.dPos + dAllPercent) / 100))
        },
        multiplicator: 1,
        dPos: 0,
        name: 'Печать цв. чертежей 914/841мм пог. см бумага'
    },
    '146': {
        key: '146',
        cost: 2,
        costAfterDiscount() {
            return (this.cost * (1 - (this.dPos + dAllPercent) / 100))
        },
        multiplicator: 1,
        dPos: 0,
        name: 'Печать цв. чертежей 594мм пог. см бумага'
    },
    '144': {
        key: '144',
        cost: 4,
        costAfterDiscount() {
            return (this.cost * (1 - (this.dPos + dAllPercent) / 100))
        },
        multiplicator: 1,
        dPos: 0,
        name: 'Печать цв. чертежей 914мм пог. см калька'
    },

    //Печать/копия Б/Ф HP2300 & HP4000 (договор)

    '147': {
        key: '147',
        cost: 1,
        costAfterDiscount() {
            return (this.cost * (1 - (this.dPos + dAllPercent) / 100))
        },
        multiplicator: 1,
        dPos: 0,
        name: 'Печать цв. чертежей 914/841мм пог. см бумага'
    },
    '148': {
        key: '148',
        cost: 1,
        costAfterDiscount() {
            return (this.cost * (1 - (this.dPos + dAllPercent) / 100))
        },
        multiplicator: 1,
        dPos: 0,
        name: 'Печать цв. чертежей 594мм пог. см бумага'
    },
    '149': {
        key: '149',
        cost: 2,
        costAfterDiscount() {
            return (this.cost * (1 - (this.dPos + dAllPercent) / 100))
        },
        multiplicator: 1,
        dPos: 0,
        name: 'Печать цв. чертежей 914мм пог. см калька'
    },

    //Сканирование больших форматов 

    '181': {
        key: '181',
        cost: 80,
        costAfterDiscount() {
            return (this.cost * (1 - (this.dPos + dAllPercent) / 100))
        },
        multiplicator: 1,
        dPos: 0,
        name: 'Сканирование ч/б А0'
    },
    '182': {
        key: '182',
        cost: 50,
        costAfterDiscount() {
            return (this.cost * (1 - (this.dPos + dAllPercent) / 100))
        },
        multiplicator: 1,
        dPos: 0,
        name: 'Сканирование ч/б А1'
    },
    '183': {
        key: '183',
        cost: 35,
        costAfterDiscount() {
            return (this.cost * (1 - (this.dPos + dAllPercent) / 100))
        },
        multiplicator: 1,
        dPos: 0,
        name: 'Сканирование ч/б А2'
    },
    '184': {
        key: '184',
        cost: 150,
        costAfterDiscount() {
            return (this.cost * (1 - (this.dPos + dAllPercent) / 100))
        },
        multiplicator: 1,
        dPos: 0,
        name: 'Сканирование цв. А0'
    },
    '185': {
        key: '185',
        cost: 100,
        costAfterDiscount() {
            return (this.cost * (1 - (this.dPos + dAllPercent) / 100))
        },
        multiplicator: 1,
        dPos: 0,
        name: 'Сканирование цв. А1'
    },
    '186': {
        key: '186',
        cost: 70,
        costAfterDiscount() {
            return (this.cost * (1 - (this.dPos + dAllPercent) / 100))
        },
        multiplicator: 1,
        dPos: 0,
        name: 'Сканирование цв. А2'
    },

    //Вывод на печать

    '801': {
        key: '801',
        cost: 10,
        costAfterDiscount() {
            return (this.cost * (1 - (this.dPos + dAllPercent) / 100))
        },
        multiplicator: 1,
        dPos: 0,
        name: 'Вывод на печать 1 категории'
    },
    '802': {
        key: '802',
        cost: 20,
        costAfterDiscount() {
            return (this.cost * (1 - (this.dPos + dAllPercent) / 100))
        },
        multiplicator: 1,
        dPos: 0,
        name: 'Вывод на печать 2 категории'
    },
    '803': {
        key: '803',
        cost: 40,
        costAfterDiscount() {
            return (this.cost * (1 - (this.dPos + dAllPercent) / 100))
        },
        multiplicator: 1,
        dPos: 0,
        name: 'Вывод на печать 3 категории'
    },
    '804': {
        key: '804',
        cost: 200,
        costAfterDiscount() {
            return (this.cost * (1 - (this.dPos + dAllPercent) / 100))
        },
        multiplicator: 1,
        dPos: 0,
        name: 'Подготовка файла к печати'
    },
    '805': {
        key: '805',
        cost: 300,
        costAfterDiscount() {
            return (this.cost * (1 - (this.dPos + dAllPercent) / 100))
        },
        multiplicator: 1,
        dPos: 0,
        name: 'Подготовка макета к резке наклеек'
    },

    //Обложки твердые

    '491': {
        key: '491',
        cost: 150,
        costAfterDiscount() {
            return (this.cost * (1 - (this.dPos + dAllPercent) / 100))
        },
        multiplicator: 1,
        dPos: 0,
        name: 'Каналы Металбинд 5 мм'
    },
    '492': {
        key: '492',
        cost: 160,
        costAfterDiscount() {
            return (this.cost * (1 - (this.dPos + dAllPercent) / 100))
        },
        multiplicator: 1,
        dPos: 0,
        name: 'Каналы Металбинд 7 мм'
    },
    '493': {
        key: '493',
        cost: 170,
        costAfterDiscount() {
            return (this.cost * (1 - (this.dPos + dAllPercent) / 100))
        },
        multiplicator: 1,
        dPos: 0,
        name: 'Каналы Металбинд 10 мм'
    },
    '494': {
        key: '494',
        cost: 180,
        costAfterDiscount() {
            return (this.cost * (1 - (this.dPos + dAllPercent) / 100))
        },
        multiplicator: 1,
        dPos: 0,
        name: 'Каналы Металбинд 13 мм'
    },
    '495': {
        key: '495',
        cost: 190,
        costAfterDiscount() {
            return (this.cost * (1 - (this.dPos + dAllPercent) / 100))
        },
        multiplicator: 1,
        dPos: 0,
        name: 'Каналы Металбинд 16 мм'
    },
    '496': {
        key: '496',
        cost: 200,
        costAfterDiscount() {
            return (this.cost * (1 - (this.dPos + dAllPercent) / 100))
        },
        multiplicator: 1,
        dPos: 0,
        name: 'Каналы Металбинд 20 мм'
    },
    '497': {
        key: '497',
        cost: 210,
        costAfterDiscount() {
            return (this.cost * (1 - (this.dPos + dAllPercent) / 100))
        },
        multiplicator: 1,
        dPos: 0,
        name: 'Каналы Металбинд 24 мм'
    },
    '498': {
        key: '498',
        cost: 220,
        costAfterDiscount() {
            return (this.cost * (1 - (this.dPos + dAllPercent) / 100))
        },
        multiplicator: 1,
        dPos: 0,
        name: 'Каналы Металбинд 28 мм'
    },
    '499': {
        key: '499',
        cost: 230,
        costAfterDiscount() {
            return (this.cost * (1 - (this.dPos + dAllPercent) / 100))
        },
        multiplicator: 1,
        dPos: 0,
        name: 'Каналы Металбинд 32 мм'
    },
    '500': {
        key: '500',
        cost: 200,
        costAfterDiscount() {
            return (this.cost * (1 - (this.dPos + dAllPercent) / 100))
        },
        multiplicator: 1,
        dPos: 0,
        name: 'Обложки Металбинд 2 шт.'
    },

    //КБС

    '600': {
        key: '600',
        cost: 100,
        costAfterDiscount() {
            return (this.cost * (1 - (this.dPos + dAllPercent) / 100))
        },
        multiplicator: 1,
        dPos: 0,
        name: 'КБС <50 страниц'
    },
    '601': {
        key: '601',
        cost: 150,
        costAfterDiscount() {
            return (this.cost * (1 - (this.dPos + dAllPercent) / 100))
        },
        multiplicator: 1,
        dPos: 0,
        name: 'КБС <100 страниц'
    },
    '602': {
        key: '602',
        cost: 200,
        costAfterDiscount() {
            return (this.cost * (1 - (this.dPos + dAllPercent) / 100))
        },
        multiplicator: 1,
        dPos: 0,
        name: 'КБС >100 страниц'
    },

    //Разное

    '700': {
        key: '700',
        cost: 10,
        costAfterDiscount() {
            return (this.cost * (1 - (this.dPos + dAllPercent) / 100))
        },
        multiplicator: 1,
        dPos: 0,
        name: 'Конверт А4'
    },
    '701': {
        key: '701',
        cost: 15,
        costAfterDiscount() {
            return (this.cost * (1 - (this.dPos + dAllPercent) / 100))
        },
        multiplicator: 1,
        dPos: 0,
        name: 'Пакет для чертежей'
    },
    '702': {
        key: '702',
        cost: 3,
        costAfterDiscount() {
            return (this.cost * (1 - (this.dPos + dAllPercent) / 100))
        },
        multiplicator: 1,
        dPos: 0,
        name: 'Файл А4'
    },
    '703': {
        key: '703',
        cost: 6,
        costAfterDiscount() {
            return (this.cost * (1 - (this.dPos + dAllPercent) / 100))
        },
        multiplicator: 1,
        dPos: 0,
        name: 'Файл А3'
    },
    '704': {
        key: '704',
        cost: 100,
        costAfterDiscount() {
            return (this.cost * (1 - (this.dPos + dAllPercent) / 100))
        },
        multiplicator: 1,
        dPos: 0,
        name: 'Упаковка в тубус большой'
    },
    '705': {
        key: '705',
        cost: 10,
        costAfterDiscount() {
            return (this.cost * (1 - (this.dPos + dAllPercent) / 100))
        },
        multiplicator: 1,
        dPos: 0,
        name: 'Пакет для документов'
    },
    '706': {
        key: '706',
        cost: 50,
        costAfterDiscount() {
            return (this.cost * (1 - (this.dPos + dAllPercent) / 100))
        },
        multiplicator: 1,
        dPos: 0,
        name: 'Упаковка в тубус малый'
    },
    '707': {
        key: '707',
        cost: 10,
        costAfterDiscount() {
            return (this.cost * (1 - (this.dPos + dAllPercent) / 100))
        },
        multiplicator: 1,
        dPos: 0,
        name: 'Складка чертежей под формат А4 (за лист)'
    },
    '710': {
        key: '710',
        cost: 595,
        costAfterDiscount() {
            return (this.cost * (1 - (this.dPos + dAllPercent) / 100))
        },
        multiplicator: 1,
        dPos: 0,
        name: 'Изготовление транспаранта с лам.'
    },
    '711': {
        key: '771',
        cost: 490,
        costAfterDiscount() {
            return (this.cost * (1 - (this.dPos + dAllPercent) / 100))
        },
        multiplicator: 1,
        dPos: 0,
        name: 'Изготовление транспаранта без лам.'
    },
    '717': {
        key: '717',
        cost: 2700,
        costAfterDiscount() {
            return (this.cost * (1 - (this.dPos + dAllPercent) / 100))
        },
        multiplicator: 1,
        dPos: 0,
        name: 'Изготовление рамки инстаграм'
    },
    '720': {
        key: '720',
        cost: 50,
        costAfterDiscount() {
            return (this.cost * (1 - (this.dPos + dAllPercent) / 100))
        },
        multiplicator: 1,
        dPos: 0,
        name: 'Печать визиток 1ст. 10 шт.'
    },
    '721': {
        key: '721',
        cost: 85,
        costAfterDiscount() {
            return (this.cost * (1 - (this.dPos + dAllPercent) / 100))
        },
        multiplicator: 1,
        dPos: 0,
        name: 'Печать визиток 2ст. 10 шт.'
    },
    '728': {
        key: '728',
        cost: 50,
        costAfterDiscount() {
            return (this.cost * (1 - (this.dPos + dAllPercent) / 100))
        },
        multiplicator: 1,
        dPos: 0,
        name: 'Упаковка CD в самокл. карман'
    },
    '730': {
        key: '730',
        cost: 50,
        costAfterDiscount() {
            return (this.cost * (1 - (this.dPos + dAllPercent) / 100))
        },
        multiplicator: 1,
        dPos: 0,
        name: 'Открытка'
    },
    '740': {
        key: '740',
        cost: 0.5,
        costAfterDiscount() {
            return (this.cost * (1 - (this.dPos + dAllPercent) / 100))
        },
        multiplicator: 1,
        dPos: 0,
        name: 'Перфорирование'
    },
    '750': {
        key: '750',
        cost: 400,
        costAfterDiscount() {
            return (this.cost * (1 - (this.dPos + dAllPercent) / 100))
        },
        multiplicator: 1,
        dPos: 0,
        name: 'Печать листовок/флаеров А6 1стр. 200 шт.'
    },
    '751': {
        key: '751',
        cost: 400,
        costAfterDiscount() {
            return (this.cost * (1 - (this.dPos + dAllPercent) / 100))
        },
        multiplicator: 1,
        dPos: 0,
        name: 'Печать листовок/флаеров А5 1стр. 100 шт.'
    },
    '752': {
        key: '752',
        cost: 800,
        costAfterDiscount() {
            return (this.cost * (1 - (this.dPos + dAllPercent) / 100))
        },
        multiplicator: 1,
        dPos: 0,
        name: 'Печать листовок/флаеров А4 1стр. 100 шт.'
    },
    '753': {
        key: '753',
        cost: 500,
        costAfterDiscount() {
            return (this.cost * (1 - (this.dPos + dAllPercent) / 100))
        },
        multiplicator: 1,
        dPos: 0,
        name: 'Печать листовок/флаеров А6 с полями 1стр. 200 шт.'
    },
    '754': {
        key: '754',
        cost: 500,
        costAfterDiscount() {
            return (this.cost * (1 - (this.dPos + dAllPercent) / 100))
        },
        multiplicator: 1,
        dPos: 0,
        name: 'Печать листовок/флаеров А5 с полями 1стр. 100 шт.'
    },
    '755': {
        key: '755',
        cost: 1000,
        costAfterDiscount() {
            return (this.cost * (1 - (this.dPos + dAllPercent) / 100))
        },
        multiplicator: 1,
        dPos: 0,
        name: 'Печать листовок/флаеров А4 с полями 1стр. 100 шт.'
    },
    '762': {
        key: '762',
        cost: 4,
        costAfterDiscount() {
            return (this.cost * (1 - (this.dPos + dAllPercent) / 100))
        },
        multiplicator: 1,
        dPos: 0,
        name: 'Натяжка на подрамник (пог. см)'
    },
    '763': {
        key: '763',
        cost: 1,
        costAfterDiscount() {
            return (this.cost * (1 - (this.dPos + dAllPercent) / 100))
        },
        multiplicator: 1,
        dPos: 0,
        name: 'Скрепление самостоятельное (за скрепку)'
    },
    '764': {
        key: '764',
        cost: 2,
        costAfterDiscount() {
            return (this.cost * (1 - (this.dPos + dAllPercent) / 100))
        },
        multiplicator: 1,
        dPos: 0,
        name: 'Скрепление автоматическое (за скрепку)'
    },
    '765': {
        key: '765',
        cost: 150,
        costAfterDiscount() {
            return (this.cost * (1 - (this.dPos + dAllPercent) / 100))
        },
        multiplicator: 1,
        dPos: 0,
        name: 'Резка (за 10 минут)'
    },
    '766': {
        key: '766',
        cost: 2,
        costAfterDiscount() {
            return (this.cost * (1 - (this.dPos + dAllPercent) / 100))
        },
        multiplicator: 1,
        dPos: 0,
        name: 'Резка наклеек до подложки пог. см'
    },
    '767': {
        key: '767',
        cost: 4,
        costAfterDiscount() {
            return (this.cost * (1 - (this.dPos + dAllPercent) / 100))
        },
        multiplicator: 1,
        dPos: 0,
        name: 'Резка наклеек сквозная пог. см '
    },
    '770': {
        key: '770',
        cost: 5,
        costAfterDiscount() {
            return (this.cost * (1 - (this.dPos + dAllPercent) / 100))
        },
        multiplicator: 1,
        dPos: 0,
        name: 'Скрепление ручное (за скрепку)'
    },
    '771': {
        key: '771',
        cost: 1,
        costAfterDiscount() {
            return (this.cost * (1 - (this.dPos + dAllPercent) / 100))
        },
        multiplicator: 1,
        dPos: 0,
        name: 'Резка'
    },
    '772': {
        key: '772',
        cost: 1.5,
        costAfterDiscount() {
            return (this.cost * (1 - (this.dPos + dAllPercent) / 100))
        },
        multiplicator: 1,
        dPos: 0,
        name: 'Складка (за операцию на листе)'
    },
    '773': {
        key: '773',
        cost: 1,
        costAfterDiscount() {
            return (this.cost * (1 - (this.dPos + dAllPercent) / 100))
        },
        multiplicator: 1,
        dPos: 0,
        name: 'Перфорирование дыроколом '
    },
    '774': {
        key: '774',
        cost: 10,
        costAfterDiscount() {
            return (this.cost * (1 - (this.dPos + dAllPercent) / 100))
        },
        multiplicator: 1,
        dPos: 0,
        name: 'Доп. услуга'
    },
    '775': {
        key: '775',
        cost: 50,
        costAfterDiscount() {
            return (this.cost * (1 - (this.dPos + dAllPercent) / 100))
        },
        multiplicator: 1,
        dPos: 0,
        name: 'Доп. услуга'
    },
    '776': {
        key: '776',
        cost: 25,
        costAfterDiscount() {
            return (this.cost * (1 - (this.dPos + dAllPercent) / 100))
        },
        multiplicator: 1,
        dPos: 0,
        name: 'Складка чертежей под формат А3 (за лист)'
    },
    '777': {
        key: '777',
        cost: 30,
        costAfterDiscount() {
            return (this.cost * (1 - (this.dPos + dAllPercent) / 100))
        },
        multiplicator: 1,
        dPos: 0,
        name: 'Складка материалов заказчика (за лист)'
    },
    '779': {
        key: '779',
        cost: 500,
        costAfterDiscount() {
            return (this.cost * (1 - (this.dPos + dAllPercent) / 100))
        },
        multiplicator: 1,
        dPos: 0,
        name: 'Доставка'
    },
    '781': {
        key: '781',
        cost: 100,
        costAfterDiscount() {
            return (this.cost * (1 - (this.dPos + dAllPercent) / 100))
        },
        multiplicator: 1,
        dPos: 0,
        name: 'Комплектование в папку'
    },
    '782': {
        key: '782',
        cost: 50,
        costAfterDiscount() {
            return (this.cost * (1 - (this.dPos + dAllPercent) / 100))
        },
        multiplicator: 1,
        dPos: 0,
        name: 'Папка-скоросшив.'
    },
    '783': {
        key: '783',
        cost: 200,
        costAfterDiscount() {
            return (this.cost * (1 - (this.dPos + dAllPercent) / 100))
        },
        multiplicator: 1,
        dPos: 0,
        name: 'Архивный короб'
    },
    '784': {
        key: '784',
        cost: 50,
        costAfterDiscount() {
            return (this.cost * (1 - (this.dPos + dAllPercent) / 100))
        },
        multiplicator: 1,
        dPos: 0,
        name: 'Папка-уголок'
    },
    '785': {
        key: '785',
        cost: 250,
        costAfterDiscount() {
            return (this.cost * (1 - (this.dPos + dAllPercent) / 100))
        },
        multiplicator: 1,
        dPos: 0,
        name: 'Папка-регистратор'
    },
}