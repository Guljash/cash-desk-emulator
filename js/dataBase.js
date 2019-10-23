const arrForMenu = ['001','101','201','301',
                    '058','158','258','358',
                    '020','120','220','320',
                    '062','162','262','362',
                    '011','111','211','311',
                    '024','124','224','324'];

//Бумага, калька, самоклейка и др.
const dataBase = {
    '501':{
        key: '501',
        cost: 1.5,
        costAfterDiscount(){
            return (this.cost * (1-(this.dPos+dAllPercent)/100))
        },
        multiplicator: 1,
        dPos: 0,
    },   
    '502':{
        key: '502',
        cost: 2.5,
        costAfterDiscount(){
            return (this.cost * (1-(this.dPos+dAllPercent)/100))
        },
        multiplicator: 1,
        dPos: 0,
    },   
    '503':{
        key: '503',
        cost: 4.5,
        costAfterDiscount(){
            return (this.cost * (1-(this.dPos+dAllPercent)/100))
        },
        multiplicator: 1,
        dPos: 0,
    },  
    '504':{
        key: '504',
        cost: 6,
        costAfterDiscount(){
            return (this.cost * (1-(this.dPos+dAllPercent)/100))
        },
        multiplicator: 1,
        dPos: 0,
    },  
    '505':{
        key: '505',
        cost: 7.5,
        costAfterDiscount(){
            return (this.cost * (1-(this.dPos+dAllPercent)/100))
        },
        multiplicator: 1,
        dPos: 0,
    },  
    '506':{
        key: '506',
        cost: 10.5,
        costAfterDiscount(){
            return (this.cost * (1-(this.dPos+dAllPercent)/100))
        },
        multiplicator: 1,
        dPos: 0,
    }, 
    '507':{
        key: '507',
        cost: 13,
        costAfterDiscount(){
            return (this.cost * (1-(this.dPos+dAllPercent)/100))
        },
        multiplicator: 1,
        dPos: 0,
    },
    '508':{
        key: '508',
        cost: 6,
        costAfterDiscount(){
            return (this.cost * (1-(this.dPos+dAllPercent)/100))
        },
        multiplicator: 1,
        dPos: 0,
    },  
    '509':{
        key: '509',
        cost: 10.5,
        costAfterDiscount(){
            return (this.cost * (1-(this.dPos+dAllPercent)/100))
        },
        multiplicator: 1,
        dPos: 0,
    },  
    '510':{
        key: '510',
        cost: 26,
        costAfterDiscount(){
            return (this.cost * (1-(this.dPos+dAllPercent)/100))
        },
        multiplicator: 1,
        dPos: 0,
    },  
    '511':{
        key: '511',
        cost: 3.5,
        costAfterDiscount(){
            return (this.cost * (1-(this.dPos+dAllPercent)/100))
        },
        multiplicator: 1,
        dPos: 0,
    },  
    '512':{
        key: '512',
        cost: 7.5,
        costAfterDiscount(){
            return (this.cost * (1-(this.dPos+dAllPercent)/100))
        },
        multiplicator: 1,
        dPos: 0,
    },  
    '513':{
        key: '513',
        cost: 17,
        costAfterDiscount(){
            return (this.cost * (1-(this.dPos+dAllPercent)/100))
        },
        multiplicator: 1,
        dPos: 0,
    },  
    '514':{
        key: '514',
        cost: 105,
        costAfterDiscount(){
            return (this.cost * (1-(this.dPos+dAllPercent)/100))
        },
        multiplicator: 1,
        dPos: 0,
    },  
    '518':{
        key: '518',
        cost: 21,
        costAfterDiscount(){
            return (this.cost * (1-(this.dPos+dAllPercent)/100))
        },
        multiplicator: 1,
        dPos: 0,
    },  
    '519':{
        key: '519',
        cost: 42,
        costAfterDiscount(){
            return (this.cost * (1-(this.dPos+dAllPercent)/100))
        },
        multiplicator: 1,
        dPos: 0,
    },  
    '520':{
        key: '520',
        cost: 50,
        costAfterDiscount(){
            return (this.cost * (1-(this.dPos+dAllPercent)/100))
        },
        multiplicator: 1,
        dPos: 0,
    },  
    '521':{
        key: '521',
        cost: 3,
        costAfterDiscount(){
            return (this.cost * (1-(this.dPos+dAllPercent)/100))
        },
        multiplicator: 1,
        dPos: 0,
    }, 
    '522':{
        key: '522',
        cost: 5.5,
        costAfterDiscount(){
            return (this.cost * (1-(this.dPos+dAllPercent)/100))
        },
        multiplicator: 1,
        dPos: 0,
    },  
    '523':{
        key: '523',
        cost: 8.5,
        costAfterDiscount(){
            return (this.cost * (1-(this.dPos+dAllPercent)/100))
        },
        multiplicator: 1,
        dPos: 0,
    },  
    '524':{
        key: '524',
        cost: 13,
        costAfterDiscount(){
            return (this.cost * (1-(this.dPos+dAllPercent)/100))
        },
        multiplicator: 1,
        dPos: 0,
    },  
    '525':{
        key: '525',
        cost: 15,
        costAfterDiscount(){
            return (this.cost * (1-(this.dPos+dAllPercent)/100))
        },
        multiplicator: 1,
        dPos: 0,
    },  
    '526':{
        key: '526',
        cost: 17,
        costAfterDiscount(){
            return (this.cost * (1-(this.dPos+dAllPercent)/100))
        },
        multiplicator: 1,
        dPos: 0,
    },  
    '527':{
        key: '527',
        cost: 25.5,
        costAfterDiscount(){
            return (this.cost * (1-(this.dPos+dAllPercent)/100))
        },
        multiplicator: 1,
        dPos: 0,
    },  
    '528':{
        key: '528',
        cost: 13,
        costAfterDiscount(){
            return (this.cost * (1-(this.dPos+dAllPercent)/100))
        },
        multiplicator: 1,
        dPos: 0,
    },  
    '529':{
        key: '529',
        cost: 17,
        costAfterDiscount(){
            return (this.cost * (1-(this.dPos+dAllPercent)/100))
        },
        multiplicator: 1,
        dPos: 0,
    },  
    '533':{
        key: '533',
        cost: 34,
        costAfterDiscount(){
            return (this.cost * (1-(this.dPos+dAllPercent)/100))
        },
        multiplicator: 1,
        dPos: 0,
    },  
    '535':{
        key: '535',
        cost: 7.5,
        costAfterDiscount(){
            return (this.cost * (1-(this.dPos+dAllPercent)/100))
        },
        multiplicator: 1,
        dPos: 0,
    },
    '536':{
        key: '536',
        cost: 19,
        costAfterDiscount(){
            return (this.cost * (1-(this.dPos+dAllPercent)/100))
        },
        multiplicator: 1,
        dPos: 0,
    },
    '537':{
        key: '537',
        cost: 26.5,
        costAfterDiscount(){
            return (this.cost * (1-(this.dPos+dAllPercent)/100))
        },
        multiplicator: 1,
        dPos: 0,
    },
    '538':{
        key: '538',
        cost: 38,
        costAfterDiscount(){
            return (this.cost * (1-(this.dPos+dAllPercent)/100))
        },
        multiplicator: 1,
        dPos: 0,
    },
    '539':{
        key: '539',
        cost: 76,
        costAfterDiscount(){
            return (this.cost * (1-(this.dPos+dAllPercent)/100))
        },
        multiplicator: 1,
        dPos: 0,
    },
    '540':{
        key: '540',
        cost: 210,
        costAfterDiscount(){
            return (this.cost * (1-(this.dPos+dAllPercent)/100))
        },
        multiplicator: 1,
        dPos: 0,
    },
    
    //Черно-белое копирование А4, А3
    
    '001':{
        key: '001',
        cost: 10,
        costAfterDiscount(){
            return (this.cost * (1-(this.dPos+dAllPercent)/100))
        },
        multiplicator: 1,
        dPos: 0,
    },
    '003':{
        key: '003',
        cost: 7,
        costAfterDiscount(){
            return (this.cost * (1-(this.dPos+dAllPercent)/100))
        },
        multiplicator: 1,
        dPos: 0,
    },
    '004':{
        key: '004',
        cost: 5,
        costAfterDiscount(){
            return (this.cost * (1-(this.dPos+dAllPercent)/100))
        },
        multiplicator: 1,
        dPos: 0,
    },
    '005':{
        key: '005',
        cost: 3.5,
        costAfterDiscount(){
            return (this.cost * (1-(this.dPos+dAllPercent)/100))
        },
        multiplicator: 1,
        dPos: 0,
    },
    '006':{
        key: '006',
        cost: 3,
        costAfterDiscount(){
            return (this.cost * (1-(this.dPos+dAllPercent)/100))
        },
        multiplicator: 1,
        dPos: 0,
    },
    '007':{
        key: '007',
        cost: 2.5,
        costAfterDiscount(){
            return (this.cost * (1-(this.dPos+dAllPercent)/100))
        },
        multiplicator: 1,
        dPos: 0,
    },
    '008':{
        key: '008',
        cost: 17,
        costAfterDiscount(){
            return (this.cost * (1-(this.dPos+dAllPercent)/100))
        },
        multiplicator: 1,
        dPos: 0,
    },
    '011':{
        key: '011',
        cost: 14,
        costAfterDiscount(){
            return (this.cost * (1-(this.dPos+dAllPercent)/100))
        },
        multiplicator: 1,
        dPos: 0,
    },
    '013':{
        key: '013',
        cost: 10,
        costAfterDiscount(){
            return (this.cost * (1-(this.dPos+dAllPercent)/100))
        },
        multiplicator: 1,
        dPos: 0,
    },
    '014':{
        key: '014',
        cost: 7,
        costAfterDiscount(){
            return (this.cost * (1-(this.dPos+dAllPercent)/100))
        },
        multiplicator: 1,
        dPos: 0,
    },
    '015':{
        key: '015',
        cost: 6,
        costAfterDiscount(){
            return (this.cost * (1-(this.dPos+dAllPercent)/100))
        },
        multiplicator: 1,
        dPos: 0,
    },
    '016':{
        key: '016',
        cost: 5,
        costAfterDiscount(){
            return (this.cost * (1-(this.dPos+dAllPercent)/100))
        },
        multiplicator: 1,
        dPos: 0,
    },
    '017':{
        key: '017',
        cost: 4,
        costAfterDiscount(){
            return (this.cost * (1-(this.dPos+dAllPercent)/100))
        },
        multiplicator: 1,
        dPos: 0,
    },
    '020':{
        key: '020',
        cost: 17,
        costAfterDiscount(){
            return (this.cost * (1-(this.dPos+dAllPercent)/100))
        },
        multiplicator: 1,
        dPos: 0,
    },
    '022':{
        key: '022',
        cost: 14,
        costAfterDiscount(){
            return (this.cost * (1-(this.dPos+dAllPercent)/100))
        },
        multiplicator: 1,
        dPos: 0,
    },
    '023':{
        key: '023',
        cost: 10,
        costAfterDiscount(){
            return (this.cost * (1-(this.dPos+dAllPercent)/100))
        },
        multiplicator: 1,
        dPos: 0,
    },
    '024':{
        key: '024',
        cost: 24,
        costAfterDiscount(){
            return (this.cost * (1-(this.dPos+dAllPercent)/100))
        },
        multiplicator: 1,
        dPos: 0,
    },
    '026':{
        key: '026',
        cost: 19,
        costAfterDiscount(){
            return (this.cost * (1-(this.dPos+dAllPercent)/100))
        },
        multiplicator: 1,
        dPos: 0,
    },
    '027':{
        key: '027',
        cost: 15,
        costAfterDiscount(){
            return (this.cost * (1-(this.dPos+dAllPercent)/100))
        },
        multiplicator: 1,
        dPos: 0,
    },
    '029':{
        key: '029',
        cost: 25,
        costAfterDiscount(){
            return (this.cost * (1-(this.dPos+dAllPercent)/100))
        },
        multiplicator: 1,
        dPos: 0,
    },
    
    //Черно-белая печать А4, А3, сканирование
    
    '101':{
        key: '101',
        cost: 10,
        costAfterDiscount(){
            return (this.cost * (1-(this.dPos+dAllPercent)/100))
        },
        multiplicator: 1,
        dPos: 0,
    },
    '103':{
        key: '103',
        cost: 7,
        costAfterDiscount(){
            return (this.cost * (1-(this.dPos+dAllPercent)/100))
        },
        multiplicator: 1,
        dPos: 0,
    },
    '104':{
        key: '104',
        cost: 5,
        costAfterDiscount(){
            return (this.cost * (1-(this.dPos+dAllPercent)/100))
        },
        multiplicator: 1,
        dPos: 0,
    },
    '105':{
        key: '105',
        cost: 3.5,
        costAfterDiscount(){
            return (this.cost * (1-(this.dPos+dAllPercent)/100))
        },
        multiplicator: 1,
        dPos: 0,
    },
    '106':{
        key: '106',
        cost: 3,
        costAfterDiscount(){
            return (this.cost * (1-(this.dPos+dAllPercent)/100))
        },
        multiplicator: 1,
        dPos: 0,
    },
    '107':{
        key: '107',
        cost: 2.5,
        costAfterDiscount(){
            return (this.cost * (1-(this.dPos+dAllPercent)/100))
        },
        multiplicator: 1,
        dPos: 0,
    },
    '111':{
        key: '111',
        cost: 14,
        costAfterDiscount(){
            return (this.cost * (1-(this.dPos+dAllPercent)/100))
        },
        multiplicator: 1,
        dPos: 0,
    },
    '113':{
        key: '113',
        cost: 10,
        costAfterDiscount(){
            return (this.cost * (1-(this.dPos+dAllPercent)/100))
        },
        multiplicator: 1,
        dPos: 0,
    },
    '114':{
        key: '114',
        cost: 7,
        costAfterDiscount(){
            return (this.cost * (1-(this.dPos+dAllPercent)/100))
        },
        multiplicator: 1,
        dPos: 0,
    },
    '115':{
        key: '115',
        cost: 6,
        costAfterDiscount(){
            return (this.cost * (1-(this.dPos+dAllPercent)/100))
        },
        multiplicator: 1,
        dPos: 0,
    },
    '116':{
        key: '116',
        cost: 5,
        costAfterDiscount(){
            return (this.cost * (1-(this.dPos+dAllPercent)/100))
        },
        multiplicator: 1,
        dPos: 0,
    },
    '117':{
        key: '117',
        cost: 4,
        costAfterDiscount(){
            return (this.cost * (1-(this.dPos+dAllPercent)/100))
        },
        multiplicator: 1,
        dPos: 0,
    },
    '120':{
        key: '120',
        cost: 17,
        costAfterDiscount(){
            return (this.cost * (1-(this.dPos+dAllPercent)/100))
        },
        multiplicator: 1,
        dPos: 0,
    },
    '122':{
        key: '122',
        cost: 14,
        costAfterDiscount(){
            return (this.cost * (1-(this.dPos+dAllPercent)/100))
        },
        multiplicator: 1,
        dPos: 0,
    },
    '123':{
        key: '123',
        cost: 10,
        costAfterDiscount(){
            return (this.cost * (1-(this.dPos+dAllPercent)/100))
        },
        multiplicator: 1,
        dPos: 0,
    },
    '124':{
        key: '124',
        cost: 24,
        costAfterDiscount(){
            return (this.cost * (1-(this.dPos+dAllPercent)/100))
        },
        multiplicator: 1,
        dPos: 0,
    },
    '126':{
        key: '126',
        cost: 19,
        costAfterDiscount(){
            return (this.cost * (1-(this.dPos+dAllPercent)/100))
        },
        multiplicator: 1,
        dPos: 0,
    },
    '127':{
        key: '127',
        cost: 15,
        costAfterDiscount(){
            return (this.cost * (1-(this.dPos+dAllPercent)/100))
        },
        multiplicator: 1,
        dPos: 0,
    },
    '128':{
        key: '128',
        cost: 80,
        costAfterDiscount(){
            return (this.cost * (1-(this.dPos+dAllPercent)/100))
        },
        multiplicator: 1,
        dPos: 0,
    },
    '130':{
        key: '130',
        cost: 15,
        costAfterDiscount(){
            return (this.cost * (1-(this.dPos+dAllPercent)/100))
        },
        multiplicator: 1,
        dPos: 0,
    },
    '131':{
        key: '131',
        cost: 20,
        costAfterDiscount(){
            return (this.cost * (1-(this.dPos+dAllPercent)/100))
        },
        multiplicator: 1,
        dPos: 0,
    },
    '132':{
        key: '132',
        cost: 15,
        costAfterDiscount(){
            return (this.cost * (1-(this.dPos+dAllPercent)/100))
        },
        multiplicator: 1,
        dPos: 0,
    },
    '133':{
        key: '133',
        cost: 500,
        costAfterDiscount(){
            return (this.cost * (1-(this.dPos+dAllPercent)/100))
        },
        multiplicator: 1,
        dPos: 0,
    },
    
    //Черно-белое копирование А4, А3 + доп. мат. 
    
    '201':{
        key: '201',
        cost: 10,
        costAfterDiscount(){
            return (this.cost * (1-(this.dPos+dAllPercent)/100))
        },
        multiplicator: 1,
        dPos: 0,
    },
    '203':{
        key: '203',
        cost: 7,
        costAfterDiscount(){
            return (this.cost * (1-(this.dPos+dAllPercent)/100))
        },
        multiplicator: 1,
        dPos: 0,
    },
    '204':{
        key: '204',
        cost: 5,
        costAfterDiscount(){
            return (this.cost * (1-(this.dPos+dAllPercent)/100))
        },
        multiplicator: 1,
        dPos: 0,
    },
    '205':{
        key: '205',
        cost: 3.5,
        costAfterDiscount(){
            return (this.cost * (1-(this.dPos+dAllPercent)/100))
        },
        multiplicator: 1,
        dPos: 0,
    },
    '206':{
        key: '206',
        cost: 3,
        costAfterDiscount(){
            return (this.cost * (1-(this.dPos+dAllPercent)/100))
        },
        multiplicator: 1,
        dPos: 0,
    },
    '207':{
        key: '207',
        cost: 2.5,
        costAfterDiscount(){
            return (this.cost * (1-(this.dPos+dAllPercent)/100))
        },
        multiplicator: 1,
        dPos: 0,
    },
    '208':{
        key: '208',
        cost: 17,
        costAfterDiscount(){
            return (this.cost * (1-(this.dPos+dAllPercent)/100))
        },
        multiplicator: 1,
        dPos: 0,
    },
    '211':{
        key: '211',
        cost: 14,
        costAfterDiscount(){
            return (this.cost * (1-(this.dPos+dAllPercent)/100))
        },
        multiplicator: 1,
        dPos: 0,
    },
    '213':{
        key: '213',
        cost: 10,
        costAfterDiscount(){
            return (this.cost * (1-(this.dPos+dAllPercent)/100))
        },
        multiplicator: 1,
        dPos: 0,
    },
    '214':{
        key: '214',
        cost: 7,
        costAfterDiscount(){
            return (this.cost * (1-(this.dPos+dAllPercent)/100))
        },
        multiplicator: 1,
        dPos: 0,
    },
    '215':{
        key: '215',
        cost: 6,
        costAfterDiscount(){
            return (this.cost * (1-(this.dPos+dAllPercent)/100))
        },
        multiplicator: 1,
        dPos: 0,
    },
    '216':{
        key: '216',
        cost: 5,
        costAfterDiscount(){
            return (this.cost * (1-(this.dPos+dAllPercent)/100))
        },
        multiplicator: 1,
        dPos: 0,
    },
    '217':{
        key: '217',
        cost: 4,
        costAfterDiscount(){
            return (this.cost * (1-(this.dPos+dAllPercent)/100))
        },
        multiplicator: 1,
        dPos: 0,
    },
    '220':{
        key: '220',
        cost: 17,
        costAfterDiscount(){
            return (this.cost * (1-(this.dPos+dAllPercent)/100))
        },
        multiplicator: 1,
        dPos: 0,
    },
    '222':{
        key: '222',
        cost: 14,
        costAfterDiscount(){
            return (this.cost * (1-(this.dPos+dAllPercent)/100))
        },
        multiplicator: 1,
        dPos: 0,
    },
    '223':{
        key: '223',
        cost: 10,
        costAfterDiscount(){
            return (this.cost * (1-(this.dPos+dAllPercent)/100))
        },
        multiplicator: 1,
        dPos: 0,
    },
    '224':{
        key: '224',
        cost: 24,
        costAfterDiscount(){
            return (this.cost * (1-(this.dPos+dAllPercent)/100))
        },
        multiplicator: 1,
        dPos: 0,
    },
    '226':{
        key: '226',
        cost: 19,
        costAfterDiscount(){
            return (this.cost * (1-(this.dPos+dAllPercent)/100))
        },
        multiplicator: 1,
        dPos: 0,
    },
    '227':{
        key: '227',
        cost: 15,
        costAfterDiscount(){
            return (this.cost * (1-(this.dPos+dAllPercent)/100))
        },
        multiplicator: 1,
        dPos: 0,
    },
    '229':{
        key: '229',
        cost: 25,
        costAfterDiscount(){
            return (this.cost * (1-(this.dPos+dAllPercent)/100))
        },
        multiplicator: 1,
        dPos: 0,
    },
    
    //Черно-белая печать А4, А3 + доп. мат.
    
    '301':{
        key: '301',
        cost: 10,
        costAfterDiscount(){
            return (this.cost * (1-(this.dPos+dAllPercent)/100))
        },
        multiplicator: 1,
        dPos: 0,
    },
    '303':{
        key: '303',
        cost: 7,
        costAfterDiscount(){
            return (this.cost * (1-(this.dPos+dAllPercent)/100))
        },
        multiplicator: 1,
        dPos: 0,
    },
    '304':{
        key: '304',
        cost: 5,
        costAfterDiscount(){
            return (this.cost * (1-(this.dPos+dAllPercent)/100))
        },
        multiplicator: 1,
        dPos: 0,
    },
    '305':{
        key: '305',
        cost: 3.5,
        costAfterDiscount(){
            return (this.cost * (1-(this.dPos+dAllPercent)/100))
        },
        multiplicator: 1,
        dPos: 0,
    },
    '306':{
        key: '306',
        cost: 3,
        costAfterDiscount(){
            return (this.cost * (1-(this.dPos+dAllPercent)/100))
        },
        multiplicator: 1,
        dPos: 0,
    },
    '307':{
        key: '307',
        cost: 2.5,
        costAfterDiscount(){
            return (this.cost * (1-(this.dPos+dAllPercent)/100))
        },
        multiplicator: 1,
        dPos: 0,
    },
    '311':{
        key: '311',
        cost: 14,
        costAfterDiscount(){
            return (this.cost * (1-(this.dPos+dAllPercent)/100))
        },
        multiplicator: 1,
        dPos: 0,
    },
    '313':{
        key: '313',
        cost: 10,
        costAfterDiscount(){
            return (this.cost * (1-(this.dPos+dAllPercent)/100))
        },
        multiplicator: 1,
        dPos: 0,
    },
    '314':{
        key: '314',
        cost: 7,
        costAfterDiscount(){
            return (this.cost * (1-(this.dPos+dAllPercent)/100))
        },
        multiplicator: 1,
        dPos: 0,
    },
    '315':{
        key: '315',
        cost: 6,
        costAfterDiscount(){
            return (this.cost * (1-(this.dPos+dAllPercent)/100))
        },
        multiplicator: 1,
        dPos: 0,
    },
    '316':{
        key: '316',
        cost: 5,
        costAfterDiscount(){
            return (this.cost * (1-(this.dPos+dAllPercent)/100))
        },
        multiplicator: 1,
        dPos: 0,
    },
    '317':{
        key: '317',
        cost: 4,
        costAfterDiscount(){
            return (this.cost * (1-(this.dPos+dAllPercent)/100))
        },
        multiplicator: 1,
        dPos: 0,
    },
    '320':{
        key: '320',
        cost: 17,
        costAfterDiscount(){
            return (this.cost * (1-(this.dPos+dAllPercent)/100))
        },
        multiplicator: 1,
        dPos: 0,
    },
    '322':{
        key: '322',
        cost: 14,
        costAfterDiscount(){
            return (this.cost * (1-(this.dPos+dAllPercent)/100))
        },
        multiplicator: 1,
        dPos: 0,
    },
    '323':{
        key: '323',
        cost: 10,
        costAfterDiscount(){
            return (this.cost * (1-(this.dPos+dAllPercent)/100))
        },
        multiplicator: 1,
        dPos: 0,
    },
    '324':{
        key: '324',
        cost: 24,
        costAfterDiscount(){
            return (this.cost * (1-(this.dPos+dAllPercent)/100))
        },
        multiplicator: 1,
        dPos: 0,
    },
    '326':{
        key: '326',
        cost: 19,
        costAfterDiscount(){
            return (this.cost * (1-(this.dPos+dAllPercent)/100))
        },
        multiplicator: 1,
        dPos: 0,
    },
    '327':{
        key: '327',
        cost: 15,
        costAfterDiscount(){
            return (this.cost * (1-(this.dPos+dAllPercent)/100))
        },
        multiplicator: 1,
        dPos: 0,
    },
    
    //Цветное копирование А4, А3
    
    '058':{
        key: '058',
        cost: 36,
        costAfterDiscount(){
            return (this.cost * (1-(this.dPos+dAllPercent)/100))
        },
        multiplicator: 1,
        dPos: 0,
    },
    '060':{
        key: '060',
        cost: 28,
        costAfterDiscount(){
            return (this.cost * (1-(this.dPos+dAllPercent)/100))
        },
        multiplicator: 1,
        dPos: 0,
    },
    '061':{
        key: '061',
        cost: 25,
        costAfterDiscount(){
            return (this.cost * (1-(this.dPos+dAllPercent)/100))
        },
        multiplicator: 1,
        dPos: 0,
    },
    '062':{
        key: '062',
        cost: 72,
        costAfterDiscount(){
            return (this.cost * (1-(this.dPos+dAllPercent)/100))
        },
        multiplicator: 1,
        dPos: 0,
    },
    '064':{
        key: '064',
        cost: 56,
        costAfterDiscount(){
            return (this.cost * (1-(this.dPos+dAllPercent)/100))
        },
        multiplicator: 1,
        dPos: 0,
    },
    '065':{
        key: '065',
        cost: 50,
        costAfterDiscount(){
            return (this.cost * (1-(this.dPos+dAllPercent)/100))
        },
        multiplicator: 1,
        dPos: 0,
    },
    
    //Цветная печать А4, А3, сканирование
    
    '158':{
        key: '158',
        cost: 36,
        costAfterDiscount(){
            return (this.cost * (1-(this.dPos+dAllPercent)/100))
        },
        multiplicator: 1,
        dPos: 0,
    },
    '160':{
        key: '160',
        cost: 28,
        costAfterDiscount(){
            return (this.cost * (1-(this.dPos+dAllPercent)/100))
        },
        multiplicator: 1,
        dPos: 0,
    },
    '161':{
        key: '161',
        cost: 25,
        costAfterDiscount(){
            return (this.cost * (1-(this.dPos+dAllPercent)/100))
        },
        multiplicator: 1,
        dPos: 0,
    },
    '162':{
        key: '162',
        cost: 72,
        costAfterDiscount(){
            return (this.cost * (1-(this.dPos+dAllPercent)/100))
        },
        multiplicator: 1,
        dPos: 0,
    },
    '164':{
        key: '164',
        cost: 56,
        costAfterDiscount(){
            return (this.cost * (1-(this.dPos+dAllPercent)/100))
        },
        multiplicator: 1,
        dPos: 0,
    },
    '165':{
        key: '165',
        cost: 50,
        costAfterDiscount(){
            return (this.cost * (1-(this.dPos+dAllPercent)/100))
        },
        multiplicator: 1,
        dPos: 0,
    },
    
    //Цветное копирование А4, А3 + доп. мат.
    
    '258':{
        key: '258',
        cost: 36,
        costAfterDiscount(){
            return (this.cost * (1-(this.dPos+dAllPercent)/100))
        },
        multiplicator: 1,
        dPos: 0,
    },
    '260':{
        key: '260',
        cost: 28,
        costAfterDiscount(){
            return (this.cost * (1-(this.dPos+dAllPercent)/100))
        },
        multiplicator: 1,
        dPos: 0,
    },
    '261':{
        key: '261',
        cost: 25,
        costAfterDiscount(){
            return (this.cost * (1-(this.dPos+dAllPercent)/100))
        },
        multiplicator: 1,
        dPos: 0,
    },
    '262':{
        key: '262',
        cost: 72,
        costAfterDiscount(){
            return (this.cost * (1-(this.dPos+dAllPercent)/100))
        },
        multiplicator: 1,
        dPos: 0,
    },
    '264':{
        key: '264',
        cost: 56,
        costAfterDiscount(){
            return (this.cost * (1-(this.dPos+dAllPercent)/100))
        },
        multiplicator: 1,
        dPos: 0,
    },
    '265':{
        key: '265',
        cost: 50,
        costAfterDiscount(){
            return (this.cost * (1-(this.dPos+dAllPercent)/100))
        },
        multiplicator: 1,
        dPos: 0,
    },
    
    //Цветная печать А4, А3 + доп. мат.

    '358':{
        key: '358',
        cost: 36,
        costAfterDiscount(){
            return (this.cost * (1-(this.dPos+dAllPercent)/100))
        },
        multiplicator: 1,
        dPos: 0,
    },
    '360':{
        key: '360',
        cost: 28,
        costAfterDiscount(){
            return (this.cost * (1-(this.dPos+dAllPercent)/100))
        },
        multiplicator: 1,
        dPos: 0,
    },
    '361':{
        key: '361',
        cost: 25,
        costAfterDiscount(){
            return (this.cost * (1-(this.dPos+dAllPercent)/100))
        },
        multiplicator: 1,
        dPos: 0,
    },
    '362':{
        key: '362',
        cost: 72,
        costAfterDiscount(){
            return (this.cost * (1-(this.dPos+dAllPercent)/100))
        },
        multiplicator: 1,
        dPos: 0,
    },
    '364':{
        key: '364',
        cost: 56,
        costAfterDiscount(){
            return (this.cost * (1-(this.dPos+dAllPercent)/100))
        },
        multiplicator: 1,
        dPos: 0,
    },
    '365':{
        key: '365',
        cost: 50,
        costAfterDiscount(){
            return (this.cost * (1-(this.dPos+dAllPercent)/100))
        },
        multiplicator: 1,
        dPos: 0,
    },
    
    //Самообслуживание
    
    '040':{
        key: '040',
        cost: 5.5,
        costAfterDiscount(){
            return (this.cost * (1-(this.dPos+dAllPercent)/100))
        },
        multiplicator: 1,
        dPos: 0,
    },
    '044':{
        key: '044',
        cost: 20,
        costAfterDiscount(){
            return (this.cost * (1-(this.dPos+dAllPercent)/100))
        },
        multiplicator: 1,
        dPos: 0,
    },
    '045':{
        key: '045',
        cost: 40,
        costAfterDiscount(){
            return (this.cost * (1-(this.dPos+dAllPercent)/100))
        },
        multiplicator: 1,
        dPos: 0,
    },
    '046':{
        key: '046',
        cost: 11,
        costAfterDiscount(){
            return (this.cost * (1-(this.dPos+dAllPercent)/100))
        },
        multiplicator: 1,
        dPos: 0,
    },
    '050':{
        key: '050',
        cost: 50,
        costAfterDiscount(){
            return (this.cost * (1-(this.dPos+dAllPercent)/100))
        },
        multiplicator: 1,
        dPos: 0,
    },
    '051':{
        key: '051',
        cost: 100,
        costAfterDiscount(){
            return (this.cost * (1-(this.dPos+dAllPercent)/100))
        },
        multiplicator: 1,
        dPos: 0,
    },
    
    //Пенокартон
    
    '150':{
        key: '150',
        cost: 1700,
        costAfterDiscount(){
            return (this.cost * (1-(this.dPos+dAllPercent)/100))
        },
        multiplicator: 1,
        dPos: 0,
    },
    '151':{
        key: '151',
        cost: 900,
        costAfterDiscount(){
            return (this.cost * (1-(this.dPos+dAllPercent)/100))
        },
        multiplicator: 1,
        dPos: 0,
    },
    '152':{
        key: '152',
        cost: 500,
        costAfterDiscount(){
            return (this.cost * (1-(this.dPos+dAllPercent)/100))
        },
        multiplicator: 1,
        dPos: 0,
    },
    '153':{
        key: '153',
        cost: 300,
        costAfterDiscount(){
            return (this.cost * (1-(this.dPos+dAllPercent)/100))
        },
        multiplicator: 1,
        dPos: 0,
    },
    
    //Обложки
    
    '580':{
        key: '580',
        cost: 35,
        costAfterDiscount(){
            return (this.cost * (1-(this.dPos+dAllPercent)/100))
        },
        multiplicator: 1,
        dPos: 0,
    },
    '581':{
        key: '581',
        cost: 30,
        costAfterDiscount(){
            return (this.cost * (1-(this.dPos+dAllPercent)/100))
        },
        multiplicator: 1,
        dPos: 0,
    },
    '582':{
        key: '582',
        cost: 45,
        costAfterDiscount(){
            return (this.cost * (1-(this.dPos+dAllPercent)/100))
        },
        multiplicator: 1,
        dPos: 0,
    },
    '583':{
        key: '583',
        cost: 35,
        costAfterDiscount(){
            return (this.cost * (1-(this.dPos+dAllPercent)/100))
        },
        multiplicator: 1,
        dPos: 0,
    },
    '584':{
        key: '584',
        cost: 45,
        costAfterDiscount(){
            return (this.cost * (1-(this.dPos+dAllPercent)/100))
        },
        multiplicator: 1,
        dPos: 0,
    },
    '585':{
        key: '585',
        cost: 30,
        costAfterDiscount(){
            return (this.cost * (1-(this.dPos+dAllPercent)/100))
        },
        multiplicator: 1,
        dPos: 0,
    },
    
    //Переплет
    
    '401':{
        key: '401',
        cost: 35,
        costAfterDiscount(){
            return (this.cost * (1-(this.dPos+dAllPercent)/100))
        },
        multiplicator: 1,
        dPos: 0,
    },
    '402':{
        key: '402',
        cost: 40,
        costAfterDiscount(){
            return (this.cost * (1-(this.dPos+dAllPercent)/100))
        },
        multiplicator: 1,
        dPos: 0,
    },
    '403':{
        key: '403',
        cost: 45,
        costAfterDiscount(){
            return (this.cost * (1-(this.dPos+dAllPercent)/100))
        },
        multiplicator: 1,
        dPos: 0,
    },
    '404':{
        key: '404',
        cost: 50,
        costAfterDiscount(){
            return (this.cost * (1-(this.dPos+dAllPercent)/100))
        },
        multiplicator: 1,
        dPos: 0,
    },
    '405':{
        key: '405',
        cost: 55,
        costAfterDiscount(){
            return (this.cost * (1-(this.dPos+dAllPercent)/100))
        },
        multiplicator: 1,
        dPos: 0,
    },
    '406':{
        key: '406',
        cost: 60,
        costAfterDiscount(){
            return (this.cost * (1-(this.dPos+dAllPercent)/100))
        },
        multiplicator: 1,
        dPos: 0,
    },
    '407':{
        key: '407',
        cost: 65,
        costAfterDiscount(){
            return (this.cost * (1-(this.dPos+dAllPercent)/100))
        },
        multiplicator: 1,
        dPos: 0,
    },
    '408':{
        key: '408',
        cost: 70,
        costAfterDiscount(){
            return (this.cost * (1-(this.dPos+dAllPercent)/100))
        },
        multiplicator: 1,
        dPos: 0,
    },
    '410':{
        key: '410',
        cost: 30,
        costAfterDiscount(){
            return (this.cost * (1-(this.dPos+dAllPercent)/100))
        },
        multiplicator: 1,
        dPos: 0,
    },
    '411':{
        key: '411',
        cost: 32,
        costAfterDiscount(){
            return (this.cost * (1-(this.dPos+dAllPercent)/100))
        },
        multiplicator: 1,
        dPos: 0,
    },
    '412':{
        key: '412',
        cost: 35,
        costAfterDiscount(){
            return (this.cost * (1-(this.dPos+dAllPercent)/100))
        },
        multiplicator: 1,
        dPos: 0,
    },
    '413':{
        key: '413',
        cost: 38,
        costAfterDiscount(){
            return (this.cost * (1-(this.dPos+dAllPercent)/100))
        },
        multiplicator: 1,
        dPos: 0,
    },
    '414':{
        key: '414',
        cost: 40,
        costAfterDiscount(){
            return (this.cost * (1-(this.dPos+dAllPercent)/100))
        },
        multiplicator: 1,
        dPos: 0,
    },
    '416':{
        key: '416',
        cost: 45,
        costAfterDiscount(){
            return (this.cost * (1-(this.dPos+dAllPercent)/100))
        },
        multiplicator: 1,
        dPos: 0,
    },
    '417':{
        key: '417',
        cost: 48,
        costAfterDiscount(){
            return (this.cost * (1-(this.dPos+dAllPercent)/100))
        },
        multiplicator: 1,
        dPos: 0,
    },
    '418':{
        key: '418',
        cost: 50,
        costAfterDiscount(){
            return (this.cost * (1-(this.dPos+dAllPercent)/100))
        },
        multiplicator: 1,
        dPos: 0,
    },
    '419':{
        key: '419',
        cost: 52,
        costAfterDiscount(){
            return (this.cost * (1-(this.dPos+dAllPercent)/100))
        },
        multiplicator: 1,
        dPos: 0,
    },
    '420':{
        key: '420',
        cost: 55,
        costAfterDiscount(){
            return (this.cost * (1-(this.dPos+dAllPercent)/100))
        },
        multiplicator: 1,
        dPos: 0,
    },
    '421':{
        key: '421',
        cost: 58,
        costAfterDiscount(){
            return (this.cost * (1-(this.dPos+dAllPercent)/100))
        },
        multiplicator: 1,
        dPos: 0,
    },
    '422':{
        key: '422',
        cost: 60,
        costAfterDiscount(){
            return (this.cost * (1-(this.dPos+dAllPercent)/100))
        },
        multiplicator: 1,
        dPos: 0,
    },
    '424':{
        key: '424',
        cost: 70,
        costAfterDiscount(){
            return (this.cost * (1-(this.dPos+dAllPercent)/100))
        },
        multiplicator: 1,
        dPos: 0,
    },
    '430':{
        key: '430',
        cost: null,
        costAfterDiscount(){
            return (this.cost * (1-(this.dPos+dAllPercent)/100))
        },
        multiplicator: 1,
        dPos: 0,
    },
    '431':{
        key: '431',
        cost: 60,
        costAfterDiscount(){
            return (this.cost * (1-(this.dPos+dAllPercent)/100))
        },
        multiplicator: 1,
        dPos: 0,
    },
    '432':{
        key: '432',
        cost: 65,
        costAfterDiscount(){
            return (this.cost * (1-(this.dPos+dAllPercent)/100))
        },
        multiplicator: 1,
        dPos: 0,
    },
    '433':{
        key: '433',
        cost: null,
        costAfterDiscount(){
            return (this.cost * (1-(this.dPos+dAllPercent)/100))
        },
        multiplicator: 1,
        dPos: 0,
    },
    '434':{
        key: '434',
        cost: 75,
        costAfterDiscount(){
            return (this.cost * (1-(this.dPos+dAllPercent)/100))
        },
        multiplicator: 1,
        dPos: 0,
    },
    '435':{
        key: '435',
        cost: 85,
        costAfterDiscount(){
            return (this.cost * (1-(this.dPos+dAllPercent)/100))
        },
        multiplicator: 1,
        dPos: 0,
    },
    '436':{
        key: '436',
        cost: null,
        costAfterDiscount(){
            return (this.cost * (1-(this.dPos+dAllPercent)/100))
        },
        multiplicator: 1,
        dPos: 0,
    },
    
    //Ламинирование 
    
    '460':{
        key: '460',
        cost: 120,
        costAfterDiscount(){
            return (this.cost * (1-(this.dPos+dAllPercent)/100))
        },
        multiplicator: 1,
        dPos: 0,
    },
    '461':{
        key: '461',
        cost: 120,
        costAfterDiscount(){
            return (this.cost * (1-(this.dPos+dAllPercent)/100))
        },
        multiplicator: 1,
        dPos: 0,
    },
    '462':{
        key: '462',
        cost: 150,
        costAfterDiscount(){
            return (this.cost * (1-(this.dPos+dAllPercent)/100))
        },
        multiplicator: 1,
        dPos: 0,
    },
    '463':{
        key: '463',
        cost: 70,
        costAfterDiscount(){
            return (this.cost * (1-(this.dPos+dAllPercent)/100))
        },
        multiplicator: 1,
        dPos: 0,
    },
    '464':{
        key: '464',
        cost: 70,
        costAfterDiscount(){
            return (this.cost * (1-(this.dPos+dAllPercent)/100))
        },
        multiplicator: 1,
        dPos: 0,
    },
    '465':{
        key: '465',
        cost: 100,
        costAfterDiscount(){
            return (this.cost * (1-(this.dPos+dAllPercent)/100))
        },
        multiplicator: 1,
        dPos: 0,
    },
    '466':{
        key: '466',
        cost: 40,
        costAfterDiscount(){
            return (this.cost * (1-(this.dPos+dAllPercent)/100))
        },
        multiplicator: 1,
        dPos: 0,
    },
    '467':{
        key: '467',
        cost: 40,
        costAfterDiscount(){
            return (this.cost * (1-(this.dPos+dAllPercent)/100))
        },
        multiplicator: 1,
        dPos: 0,
    },
    '469':{
        key: '469',
        cost: 30,
        costAfterDiscount(){
            return (this.cost * (1-(this.dPos+dAllPercent)/100))
        },
        multiplicator: 1,
        dPos: 0,
    },
    '470':{
        key: '470',
        cost: 30,
        costAfterDiscount(){
            return (this.cost * (1-(this.dPos+dAllPercent)/100))
        },
        multiplicator: 1,
        dPos: 0,
    },
    '480':{
        key: '480',
        cost: 6,
        costAfterDiscount(){
            return (this.cost * (1-(this.dPos+dAllPercent)/100))
        },
        multiplicator: 1,
        dPos: 0,
    },
    
    //Копирование больших форматов ч/б
    
    '070':{
        key: '070',
        cost: 0.9,
        costAfterDiscount(){
            return (this.cost * (1-(this.dPos+dAllPercent)/100))
        },
        multiplicator: 1,
        dPos: 0,
    },
    '071':{
        key: '071',
        cost: 0.8,
        costAfterDiscount(){
            return (this.cost * (1-(this.dPos+dAllPercent)/100))
        },
        multiplicator: 1,
        dPos: 0,
    },
    '074':{
        key: '074',
        cost: 3.5,
        costAfterDiscount(){
            return (this.cost * (1-(this.dPos+dAllPercent)/100))
        },
        multiplicator: 1,
        dPos: 0,
    },
    '080':{
        key: '080',
        cost: 20,
        costAfterDiscount(){
            return (this.cost * (1-(this.dPos+dAllPercent)/100))
        },
        multiplicator: 1,
        dPos: 0,
    },
    '081':{
        key: '081',
        cost: 20,
        costAfterDiscount(){
            return (this.cost * (1-(this.dPos+dAllPercent)/100))
        },
        multiplicator: 1,
        dPos: 0,
    },
    
    //Печать больших форматов ч/б
    
    '170':{
        key: '170',
        cost: 0.9,
        costAfterDiscount(){
            return (this.cost * (1-(this.dPos+dAllPercent)/100))
        },
        multiplicator: 1,
        dPos: 0,
    },
    '171':{
        key: '071',
        cost: 0.8,
        costAfterDiscount(){
            return (this.cost * (1-(this.dPos+dAllPercent)/100))
        },
        multiplicator: 1,
        dPos: 0,
    },
    '174':{
        key: '074',
        cost: 3.5,
        costAfterDiscount(){
            return (this.cost * (1-(this.dPos+dAllPercent)/100))
        },
        multiplicator: 1,
        dPos: 0,
    },
    
    //Печать/копия БФ цвет
    
    '190':{
        key: '190',
        cost: 7.5,
        costAfterDiscount(){
            return (this.cost * (1-(this.dPos+dAllPercent)/100))
        },
        multiplicator: 1,
        dPos: 0,
    },
    '191':{
        key: '191',
        cost: 11,
        costAfterDiscount(){
            return (this.cost * (1-(this.dPos+dAllPercent)/100))
        },
        multiplicator: 1,
        dPos: 0,
    },
    '192':{
        key: '192',
        cost: 5.5,
        costAfterDiscount(){
            return (this.cost * (1-(this.dPos+dAllPercent)/100))
        },
        multiplicator: 1,
        dPos: 0,
    },
    '193':{
        key: '193',
        cost: 10,
        costAfterDiscount(){
            return (this.cost * (1-(this.dPos+dAllPercent)/100))
        },
        multiplicator: 1,
        dPos: 0,
    },
    '194':{
        key: '194',
        cost: 25,
        costAfterDiscount(){
            return (this.cost * (1-(this.dPos+dAllPercent)/100))
        },
        multiplicator: 1,
        dPos: 0,
    },
    '195':{
        key: '195',
        cost: 2,
        costAfterDiscount(){
            return (this.cost * (1-(this.dPos+dAllPercent)/100))
        },
        multiplicator: 1,
        dPos: 0,
    },
    '196':{
        key: '196',
        cost: 11,
        costAfterDiscount(){
            return (this.cost * (1-(this.dPos+dAllPercent)/100))
        },
        multiplicator: 1,
        dPos: 0,
    },
    '197':{
        key: '197',
        cost: 13,
        costAfterDiscount(){
            return (this.cost * (1-(this.dPos+dAllPercent)/100))
        },
        multiplicator: 1,
        dPos: 0,
    },
    '198':{
        key: '198',
        cost: 20,
        costAfterDiscount(){
            return (this.cost * (1-(this.dPos+dAllPercent)/100))
        },
        multiplicator: 1,
        dPos: 0,
    },
    
    //Печать/копия Б/Ф цвет Сухаревская
    
    '140':{
        key: '140',
        cost: 11,
        costAfterDiscount(){
            return (this.cost * (1-(this.dPos+dAllPercent)/100))
        },
        multiplicator: 1,
        dPos: 0,
    },
    '141':{
        key: '141',
        cost: 16.5,
        costAfterDiscount(){
            return (this.cost * (1-(this.dPos+dAllPercent)/100))
        },
        multiplicator: 1,
        dPos: 0,
    },
    '142':{
        key: '142',
        cost: 8.5,
        costAfterDiscount(){
            return (this.cost * (1-(this.dPos+dAllPercent)/100))
        },
        multiplicator: 1,
        dPos: 0,
    },
    '143':{
        key: '143',
        cost: 19.5,
        costAfterDiscount(){
            return (this.cost * (1-(this.dPos+dAllPercent)/100))
        },
        multiplicator: 1,
        dPos: 0,
    },
    
    //Печать/копия Б/Ф HP2300 & HP4000 
    
    '145':{
        key: '145',
        cost: 2,
        costAfterDiscount(){
            return (this.cost * (1-(this.dPos+dAllPercent)/100))
        },
        multiplicator: 1,
        dPos: 0,
    },
    '146':{
        key: '146',
        cost: 2,
        costAfterDiscount(){
            return (this.cost * (1-(this.dPos+dAllPercent)/100))
        },
        multiplicator: 1,
        dPos: 0,
    },
    '144':{
        key: '144',
        cost: 4,
        costAfterDiscount(){
            return (this.cost * (1-(this.dPos+dAllPercent)/100))
        },
        multiplicator: 1,
        dPos: 0,
    },
    
    //Печать/копия Б/Ф HP2300 & HP4000 (договор)
    
    '147':{
        key: '147',
        cost: 1,
        costAfterDiscount(){
            return (this.cost * (1-(this.dPos+dAllPercent)/100))
        },
        multiplicator: 1,
        dPos: 0,
    },
    '148':{
        key: '148',
        cost: 1,
        costAfterDiscount(){
            return (this.cost * (1-(this.dPos+dAllPercent)/100))
        },
        multiplicator: 1,
        dPos: 0,
    },
    '149':{
        key: '149',
        cost: 2,
        costAfterDiscount(){
            return (this.cost * (1-(this.dPos+dAllPercent)/100))
        },
        multiplicator: 1,
        dPos: 0,
    },
    
    //Сканирование больших форматов 
    
    '181':{
        key: '181',
        cost: 80,
        costAfterDiscount(){
            return (this.cost * (1-(this.dPos+dAllPercent)/100))
        },
        multiplicator: 1,
        dPos: 0,
    },
    '182':{
        key: '182',
        cost: 50,
        costAfterDiscount(){
            return (this.cost * (1-(this.dPos+dAllPercent)/100))
        },
        multiplicator: 1,
        dPos: 0,
    },
    '183':{
        key: '183',
        cost: 35,
        costAfterDiscount(){
            return (this.cost * (1-(this.dPos+dAllPercent)/100))
        },
        multiplicator: 1,
        dPos: 0,
    },
    '184':{
        key: '184',
        cost: 150,
        costAfterDiscount(){
            return (this.cost * (1-(this.dPos+dAllPercent)/100))
        },
        multiplicator: 1,
        dPos: 0,
    },
    '185':{
        key: '185',
        cost: 100,
        costAfterDiscount(){
            return (this.cost * (1-(this.dPos+dAllPercent)/100))
        },
        multiplicator: 1,
        dPos: 0,
    },
    '186':{
        key: '186',
        cost: 70,
        costAfterDiscount(){
            return (this.cost * (1-(this.dPos+dAllPercent)/100))
        },
        multiplicator: 1,
        dPos: 0,
    },
    
    //Вывод на печать
    
    '801':{
        key: '801',
        cost: 10,
        costAfterDiscount(){
            return (this.cost * (1-(this.dPos+dAllPercent)/100))
        },
        multiplicator: 1,
        dPos: 0,
    },
    '802':{
        key: '802',
        cost: 20,
        costAfterDiscount(){
            return (this.cost * (1-(this.dPos+dAllPercent)/100))
        },
        multiplicator: 1,
        dPos: 0,
    },
    '803':{
        key: '803',
        cost: 40,
        costAfterDiscount(){
            return (this.cost * (1-(this.dPos+dAllPercent)/100))
        },
        multiplicator: 1,
        dPos: 0,
    }, 
    '804':{
        key: '804',
        cost: 200,
        costAfterDiscount(){
            return (this.cost * (1-(this.dPos+dAllPercent)/100))
        },
        multiplicator: 1,
        dPos: 0,
    }, 
    '805':{
        key: '805',
        cost: 300,
        costAfterDiscount(){
            return (this.cost * (1-(this.dPos+dAllPercent)/100))
        },
        multiplicator: 1,
        dPos: 0,
    }, 
    
    //Обложки твердые
    
    '491':{
        key: '491',
        cost: 150,
        costAfterDiscount(){
            return (this.cost * (1-(this.dPos+dAllPercent)/100))
        },
        multiplicator: 1,
        dPos: 0,
    },
    '492':{
        key: '492',
        cost: 160,
        costAfterDiscount(){
            return (this.cost * (1-(this.dPos+dAllPercent)/100))
        },
        multiplicator: 1,
        dPos: 0,
    },
    '493':{
        key: '493',
        cost: 170,
        costAfterDiscount(){
            return (this.cost * (1-(this.dPos+dAllPercent)/100))
        },
        multiplicator: 1,
        dPos: 0,
    }, 
    '494':{
        key: '494',
        cost: 180,
        costAfterDiscount(){
            return (this.cost * (1-(this.dPos+dAllPercent)/100))
        },
        multiplicator: 1,
        dPos: 0,
    },
    '495':{
        key: '495',
        cost: 190,
        costAfterDiscount(){
            return (this.cost * (1-(this.dPos+dAllPercent)/100))
        },
        multiplicator: 1,
        dPos: 0,
    },
    '496':{
        key: '496',
        cost: 200,
        costAfterDiscount(){
            return (this.cost * (1-(this.dPos+dAllPercent)/100))
        },
        multiplicator: 1,
        dPos: 0,
    },
    '497':{
        key: '497',
        cost: 210,
        costAfterDiscount(){
            return (this.cost * (1-(this.dPos+dAllPercent)/100))
        },
        multiplicator: 1,
        dPos: 0,
    }, 
    '498':{
        key: '498',
        cost: 220,
        costAfterDiscount(){
            return (this.cost * (1-(this.dPos+dAllPercent)/100))
        },
        multiplicator: 1,
        dPos: 0,
    },
    '499':{
        key: '499',
        cost: 230,
        costAfterDiscount(){
            return (this.cost * (1-(this.dPos+dAllPercent)/100))
        },
        multiplicator: 1,
        dPos: 0,
    }, 
    '500':{
        key: '500',
        cost: 200,
        costAfterDiscount(){
            return (this.cost * (1-(this.dPos+dAllPercent)/100))
        },
        multiplicator: 1,
        dPos: 0,
    },
    
    //КБС
    
    '600':{
        key: '600',
        cost: 100,
        costAfterDiscount(){
            return (this.cost * (1-(this.dPos+dAllPercent)/100))
        },
        multiplicator: 1,
        dPos: 0,
    },
    '601':{
        key: '601',
        cost: 150,
        costAfterDiscount(){
            return (this.cost * (1-(this.dPos+dAllPercent)/100))
        },
        multiplicator: 1,
        dPos: 0,
    }, 
    '602':{
        key: '602',
        cost: 200,
        costAfterDiscount(){
            return (this.cost * (1-(this.dPos+dAllPercent)/100))
        },
        multiplicator: 1,
        dPos: 0,
    },
    
    //Разное
    
    '700':{
        key: '700',
        cost: 10,
        costAfterDiscount(){
            return (this.cost * (1-(this.dPos+dAllPercent)/100))
        },
        multiplicator: 1,
        dPos: 0,
    },
    '701':{
        key: '701',
        cost: 15,
        costAfterDiscount(){
            return (this.cost * (1-(this.dPos+dAllPercent)/100))
        },
        multiplicator: 1,
        dPos: 0,
    }, 
    '702':{
        key: '702',
        cost: 3,
        costAfterDiscount(){
            return (this.cost * (1-(this.dPos+dAllPercent)/100))
        },
        multiplicator: 1,
        dPos: 0,
    },   
    '703':{
        key: '703',
        cost: 6,
        costAfterDiscount(){
            return (this.cost * (1-(this.dPos+dAllPercent)/100))
        },
        multiplicator: 1,
        dPos: 0,
    },
    '704':{
        key: '704',
        cost: 100,
        costAfterDiscount(){
            return (this.cost * (1-(this.dPos+dAllPercent)/100))
        },
        multiplicator: 1,
        dPos: 0,
    }, 
    '705':{
        key: '705',
        cost: 10,
        costAfterDiscount(){
            return (this.cost * (1-(this.dPos+dAllPercent)/100))
        },
        multiplicator: 1,
        dPos: 0,
    },   
    '706':{
        key: '706',
        cost: 50,
        costAfterDiscount(){
            return (this.cost * (1-(this.dPos+dAllPercent)/100))
        },
        multiplicator: 1,
        dPos: 0,
    },
    '707':{
        key: '707',
        cost: 10,
        costAfterDiscount(){
            return (this.cost * (1-(this.dPos+dAllPercent)/100))
        },
        multiplicator: 1,
        dPos: 0,
    }, 
    '710':{
        key: '710',
        cost: 595,
        costAfterDiscount(){
            return (this.cost * (1-(this.dPos+dAllPercent)/100))
        },
        multiplicator: 1,
        dPos: 0,
    },   
    '711':{
        key: '771',
        cost: 490,
        costAfterDiscount(){
            return (this.cost * (1-(this.dPos+dAllPercent)/100))
        },
        multiplicator: 1,
        dPos: 0,
    },
    '717':{
        key: '717',
        cost: 2700,
        costAfterDiscount(){
            return (this.cost * (1-(this.dPos+dAllPercent)/100))
        },
        multiplicator: 1,
        dPos: 0,
    }, 
    '720':{
        key: '720',
        cost: 50,
        costAfterDiscount(){
            return (this.cost * (1-(this.dPos+dAllPercent)/100))
        },
        multiplicator: 1,
        dPos: 0,
    },
    '721':{
        key: '721',
        cost: 85,
        costAfterDiscount(){
            return (this.cost * (1-(this.dPos+dAllPercent)/100))
        },
        multiplicator: 1,
        dPos: 0,
    },
    '728':{
        key: '728',
        cost: 50,
        costAfterDiscount(){
            return (this.cost * (1-(this.dPos+dAllPercent)/100))
        },
        multiplicator: 1,
        dPos: 0,
    }, 
    '730':{
        key: '730',
        cost: 50,
        costAfterDiscount(){
            return (this.cost * (1-(this.dPos+dAllPercent)/100))
        },
        multiplicator: 1,
        dPos: 0,
    },   
    '740':{
        key: '740',
        cost: 0.5,
        costAfterDiscount(){
            return (this.cost * (1-(this.dPos+dAllPercent)/100))
        },
        multiplicator: 1,
        dPos: 0,
    },
    '750':{
        key: '750',
        cost: 400,
        costAfterDiscount(){
            return (this.cost * (1-(this.dPos+dAllPercent)/100))
        },
        multiplicator: 1,
        dPos: 0,
    },
    '751':{
        key: '751',
        cost: 400,
        costAfterDiscount(){
            return (this.cost * (1-(this.dPos+dAllPercent)/100))
        },
        multiplicator: 1,
        dPos: 0,
    },
    '752':{
        key: '752',
        cost: 800,
        costAfterDiscount(){
            return (this.cost * (1-(this.dPos+dAllPercent)/100))
        },
        multiplicator: 1,
        dPos: 0,
    },
    '753':{
        key: '753',
        cost: 500,
        costAfterDiscount(){
            return (this.cost * (1-(this.dPos+dAllPercent)/100))
        },
        multiplicator: 1,
        dPos: 0,
    },
    '754':{
        key: '754',
        cost: 500,
        costAfterDiscount(){
            return (this.cost * (1-(this.dPos+dAllPercent)/100))
        },
        multiplicator: 1,
        dPos: 0,
    },
    '755':{
        key: '755',
        cost: 1000,
        costAfterDiscount(){
            return (this.cost * (1-(this.dPos+dAllPercent)/100))
        },
        multiplicator: 1,
        dPos: 0,
    },
    '762':{
        key: '762',
        cost: 4,
        costAfterDiscount(){
            return (this.cost * (1-(this.dPos+dAllPercent)/100))
        },
        multiplicator: 1,
        dPos: 0,
    }, 
    '763':{
        key: '763',
        cost: 1,
        costAfterDiscount(){
            return (this.cost * (1-(this.dPos+dAllPercent)/100))
        },
        multiplicator: 1,
        dPos: 0,
    },   
    '764':{
        key: '764',
        cost: 2,
        costAfterDiscount(){
            return (this.cost * (1-(this.dPos+dAllPercent)/100))
        },
        multiplicator: 1,
        dPos: 0,
    },
    '765':{
        key: '765',
        cost: 150,
        costAfterDiscount(){
            return (this.cost * (1-(this.dPos+dAllPercent)/100))
        },
        multiplicator: 1,
        dPos: 0,
    },
    '766':{
        key: '766',
        cost: 2,
        costAfterDiscount(){
            return (this.cost * (1-(this.dPos+dAllPercent)/100))
        },
        multiplicator: 1,
        dPos: 0,
    }, 
    '767':{
        key: '767',
        cost: 4,
        costAfterDiscount(){
            return (this.cost * (1-(this.dPos+dAllPercent)/100))
        },
        multiplicator: 1,
        dPos: 0,
    }, 
    '770':{
        key: '770',
        cost: 5,
        costAfterDiscount(){
            return (this.cost * (1-(this.dPos+dAllPercent)/100))
        },
        multiplicator: 1,
        dPos: 0,
    },   
    '771':{
        key: '771',
        cost: 1,
        costAfterDiscount(){
            return (this.cost * (1-(this.dPos+dAllPercent)/100))
        },
        multiplicator: 1,
        dPos: 0,
    },
    '772':{
        key: '772',
        cost: 1.5,
        costAfterDiscount(){
            return (this.cost * (1-(this.dPos+dAllPercent)/100))
        },
        multiplicator: 1,
        dPos: 0,
    }, 
    '773':{
        key: '773',
        cost: 1,
        costAfterDiscount(){
            return (this.cost * (1-(this.dPos+dAllPercent)/100))
        },
        multiplicator: 1,
        dPos: 0,
    },
    '774':{
        key: '774',
        cost: 10,
        costAfterDiscount(){
            return (this.cost * (1-(this.dPos+dAllPercent)/100))
        },
        multiplicator: 1,
        dPos: 0,
    },   
    '775':{
        key: '775',
        cost: 50,
        costAfterDiscount(){
            return (this.cost * (1-(this.dPos+dAllPercent)/100))
        },
        multiplicator: 1,
        dPos: 0,
    },
    '776':{
        key: '776',
        cost: 25,
        costAfterDiscount(){
            return (this.cost * (1-(this.dPos+dAllPercent)/100))
        },
        multiplicator: 1,
        dPos: 0,
    }, 
    '777':{
        key: '777',
        cost: 30,
        costAfterDiscount(){
            return (this.cost * (1-(this.dPos+dAllPercent)/100))
        },
        multiplicator: 1,
        dPos: 0,
    }, 
    '779':{
        key: '779',
        cost: 500,
        costAfterDiscount(){
            return (this.cost * (1-(this.dPos+dAllPercent)/100))
        },
        multiplicator: 1,
        dPos: 0,
    },
    '781':{
        key: '781',
        cost: 100,
        costAfterDiscount(){
            return (this.cost * (1-(this.dPos+dAllPercent)/100))
        },
        multiplicator: 1,
        dPos: 0,
    },   
    '782':{
        key: '782',
        cost: 50,
        costAfterDiscount(){
            return (this.cost * (1-(this.dPos+dAllPercent)/100))
        },
        multiplicator: 1,
        dPos: 0,
    },
    '783':{
        key: '783',
        cost: 200,
        costAfterDiscount(){
            return (this.cost * (1-(this.dPos+dAllPercent)/100))
        },
        multiplicator: 1,
        dPos: 0,
    }, 
    '784':{
        key: '784',
        cost: 50,
        costAfterDiscount(){
            return (this.cost * (1-(this.dPos+dAllPercent)/100))
        },
        multiplicator: 1,
        dPos: 0,
    }, 
    '785':{
        key: '785',
        cost: 250,
        costAfterDiscount(){
            return (this.cost * (1-(this.dPos+dAllPercent)/100))
        },
        multiplicator: 1,
        dPos: 0,
    }, 
}