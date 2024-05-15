1. Types in typescript. (string, number, boolean, undefined, null, bigint, symbol).
ex: let x = 5 (automatically infer the type)
    let x:number = 5 (explicitly assign the type)
    
2. Union of types. 
ex: let userId: number | string = "14";
ex: let users: string[] | object[]; either string of data or objects 
ex: let data: (number | string | boolean)[]; [1,"abhisek", true]
ex: arrays in the form of typed tuple -> har index ka type. 
    let val: [number, string, number] = [14, "abhisek", 24]
   
3. custom interfaces 
   inteface productDTO {
   name: string,
   price: number,
   warrenty: number,
   color: string,
   company: string,
   isSuv?: boolean 
   }
   
4.  types to a function
    function add(x: number, y: number): number { return x + y; }
    easy right ... :-)
    
5. enum in ts
   enum USERSTATUS {
   ACTIVE,
   INACTIVE,
   PENDING,
   LEAVE
   }
   
   // valued enum
   enum StatusCodes {
   success = 200,
   created = 201,
   servererror = 500,
   badrequest = 401
   }
   
   // string wale enum
   enum StatusCodes {
   success = "200",
   created = "201",
   servererror = "500",
   badrequest = "401"
   }
   
   6. type vs interface
      - interface can be extends by another interface. 
      interface numberAsKey {
      [index: number]: number
      }
      
      interface StringKey extends interface {
      [key: string]: number,
      }
      
      - type cardNumber = {
      	cardNum: string
      	}
      	
      	type cardDate = {
      	 cardDetail: string
      	}
      	
      	type cardDetails = cardNumber & cardDate & { csv: number }
      	
      - re-opening a interface is possible but reopening of the type is not possible.
      
      - type can be used to create specific tuple like 
      type pair = [number, number];
      type triplet = [number, number, number];
