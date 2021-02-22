// Returns a random DNA base
const returnRandBase = () => {
  const dnaBases = ['A', 'T', 'C', 'G'];
  return dnaBases[Math.floor(Math.random() * 4)];
};

// Returns a random single stand of DNA containing 15 bases
const mockUpStrand = () => {
  const newStrand = [];
  for (let i = 0; i < 15; i++) {
    newStrand.push(returnRandBase());
  }
  return newStrand;
};

const pAequorFactory = (specimenNum, dna) => { return{
  specimenNum: specimenNum,
  dna: dna,
  mutate(){
    selectedPosition = Math.floor(Math.random() * this.dna.length)
    currentBase = this.dna[selectedPosition]
    if(currentBase === 'A'){
      possibleBases = ['T', 'C', 'G']
       newBase = possibleBases[Math.floor(Math.random() * 3)]
    } else if (currentBase === 'T'){
      possibleBases = ['A', 'C', 'G']
       newBase = possibleBases[Math.floor(Math.random() * 3)]
    } else if (currentBase === 'C'){
      possibleBases = ['A', 'T', 'G']
       newBase = possibleBases[Math.floor(Math.random() * 3)]
  } else if (currentBase === 'G'){
    possibleBases = ['A', 'C', 'T']
     newBase = possibleBases[Math.floor(Math.random() * 3)]
}
  this.dna[selectedPosition]=newBase
  return this.dna
  },
  compareDNA(otherOrg){
    let counter = 0
     for (i=0;i<this.dna.length;i++){
     if(this.dna[i]===otherOrg.dna[i]){
       counter =counter + 1
     } 
    }
    equalDna =  Math.floor(counter/this.dna.length*100)
    return `specimen #${this.specimenNum} and specimen #${otherOrg.specimenNum} have ${equalDna}% DNA in common.`

  },
  willLikelySurvive(){
    counter =0 
    for (i=0;i<this.dna.length;i++){
      if(this.dna[i]==='C'||this.dna[i]==='G'){
        counter =counter + 1
    }
  }
  survivalRate =  Math.floor(counter/this.dna.length*100)
  if(survivalRate>=60){
    return true
  } else {
    return false
  }
}
}
}

const createZoo=()=>{
  zooArray = []
  totalPop = 0
  specimenNum = 1
  
  while (totalPop < 30) {
    
    evaluatedSpecimen = pAequorFactory(specimenNum,mockUpStrand());
    

    if(evaluatedSpecimen.willLikelySurvive()===true){
      zooArray.push(evaluatedSpecimen)
      totalPop = totalPop + 1
     
      
    }
    
    specimenNum = specimenNum +1 
    
    
  }

  return zooArray.length
 
}

/*subjectOne = pAequorFactory(1,mockUpStrand())
subjectTwo = pAequorFactory(2,mockUpStrand())
console.log(subjectOne)
console.log(subjectTwo)
console.log(subjectOne.compareDNA(subjectTwo))
console.log(subjectOne.willLikelySurvive())*/

console.log(createZoo())



