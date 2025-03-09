// 1. Create a variable to store the singleton instance of the bank branch.
let bankBranchInstance = null;

// 2. Define a class called BankBranch for managing branch information.
class BankBranch {
  // 3. In the BankBranch class:
  //    - Create a constructor that takes branchInfo as a parameter.
  constructor(branchInfo) {
    //    - Inside the constructor, check if the bankBranchInstance variable is null (indicating no instance exists).
    if (!bankBranchInstance) {
      //    - If bankBranchInstance is null, create a new instance with the provided branchInfo and assign it to bankBranchInstance.
      this.branchInfo = branchInfo;
      bankBranchInstance = this;
    }
    //    - Return the bankBranchInstance whether it's newly created or existing.
    return bankBranchInstance;
  }

  // 4. Add methods to the BankBranch class for managing branch-related information.
  // For example, getBranchInfo retrieves branch details.
  getBranchInfo() {
    return this.branchInfo;
  }
}

// 5. In the usage section:
//    - Create instances of the BankBranch class, such as branchA and branchB, with different branch information.
const branchA = new BankBranch("Main Branch: 1234 Central Ave");
const branchB = new BankBranch("Secondary Branch: 5678 North St");

//    - Use the getBranchInfo method to retrieve branch information from the instances.
console.log("Branch A Info:", branchA.getBranchInfo());
console.log("Branch B Info:", branchB.getBranchInfo());

//    - Verify that branchA and branchB are both referring to the same instance by comparing them using ===.
console.log("Are branchA and branchB the same instance?", branchA === branchB);
