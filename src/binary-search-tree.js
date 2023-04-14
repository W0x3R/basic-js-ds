const { NotImplementedError } = require("../extensions/index.js");

const { Node } = require("../extensions/list-tree.js");

/**
 * Implement simple binary search tree according to task description
 * using Node from extensions
 */

// HOW TO DO IT
// class Node {
//   constructor(value) {
//     this.value = value;
//     this.left = null;
//     this.right = null;
//   }
// }

// class BinarySearchTree {
//   constructor() {
//     this.root = null;
//   }

//   add(value) {
//     this.root = addWithin(this.root, value);

//     function addWithin(node, value) {
//       if (!node) {
//         return new Node(value);
//       }

//       if (node.value === value) {
//         return node;
//       }

//       if (value < node.value) {
//         node.left = addWithin(node.left, value);
//       } else {
//         node.right = addWithin(node.right, value);
//       }

//       return node;
//     }
//   }

//   has(value) {
//     return searchWithin(this.root, value);

//     function searchWithin(node, value) {
//       if (!node) {
//         return false;
//       }

//       if (node.value === value) {
//         return true;
//       }

//       return value < node.value ?
//         searchWithin(node.left, value) :
//         searchWithin(node.right, value);
//     }
//   }

//   remove(value) {
//     this.root = removeNode(this.root, value);

//     function removeNode(node, value) {
//       if (!node) {
//         return null;
//       }

//       if (value < node.value) {
//         node.left = removeNode(node.left, value);
//         return node;
//       } else if (node.value < value) {
//         node.right = removeNode(node.right, value);
//         return node;
//       } else {
//         // equal - should remove this item
//         if (!node.left && !node.right) {
//           // put null instead of item
//           return null;
//         }

//         if (!node.left) {
//           // set right child instead of item
//           node = node.right;
//           return node;
//         }

//         if (!node.right) {
//           // set left child instead of item
//           node = node.left;
//           return node;
//         }

//         // both children exists for this item
//         let minFromRight = node.right;
//         while (minFromRight.left) {
//           minFromRight = minFromRight.left;
//         }
//         node.value = minFromRight.value;

//         node.right = removeNode(node.right, minFromRight.value);

//         return node;
//       }
//     }
//   }

//   min() {
//     if (!this.root) {
//       return;
//     }

//     let node = this.root;
//     while (node.left) {
//       node = node.left;
//     }

//     return node.value;
//   }

//   max() {
//     if (!this.root) {
//       return;
//     }

//     let node = this.root;
//     while (node.right) {
//       node = node.right;
//     }

//     return node.value;
//   }

//   leftTraverse(cb) {
//     doLeft(this.root, cb);

//     function doLeft(node, cb) {
//       if (node) {
//         doLeft(node.left, cb);
//         cb(node.value);
//         doLeft(node.right, cb);
//       }
//     }
//   }

//   rightTraverse(cb) {
//     doRight(this.root, cb);

//     function doRight(node, cb) {
//       if (node) {
//         doRight(node.right, cb);
//         cb(node.value);
//         doRight(node.left, cb);
//       }
//     }
//   }
// }

// console.log('s01e12 - BST (Binary Search Tree)');

// function addItems() {
//   console.log('\n  Add Items');
//   console.log('add 13, 15, 9, 20, 18, 32, 25');

//   bst.add(13);
//   bst.add(15);
//   bst.add(9);
//   bst.add(20);
//   bst.add(18);
//   bst.add(32);
//   bst.add(25);

//   //  Should get something like this:
//   //    13
//   //   /  \
//   //  9    15
//   //        \
//   //         20
//   //        /  \
//   //       18   32
//   //           /
//   //          25
// }

// function getItems() {
//   console.log('\n  Get Items');

//   console.log('has 10', bst.has(10));
//   console.log('has 15', bst.has(15));
//   console.log('\n', bst);

//   console.log('  Left Traverse:');
//   bst.leftTraverse((val) => console.log(val));

//   console.log('  Right Traverse:');
//   bst.rightTraverse((val) => console.log(val));

//   console.log('min:', bst.min());
//   console.log('max:', bst.max());
// }

// function removeItem() {
//   console.log('  Remove Item');

//   bst.remove(15);
//   console.log('remove 15');
//   console.log(bst);

//   console.log('  Left Traverse:');
//   bst.leftTraverse((val) => console.log(val));
// }

// const bst = new BinarySearchTree();

// addItems();
// getItems();
// removeItem();
class BinarySearchTree {
  constructor() {
    this.v = null;
  }
  root() {
    return this.v;
  }
  add(data) {
    const node = new Node(data);
    let currentValue = this.v;
    if (this.v === null) {
      this.v = node;
      return;
    } else {
      while (currentValue) {
        if (node.data > currentValue.data) {
          if (currentValue.right === null) {
            currentValue.right = node;
            return;
          }
          currentValue = currentValue.right;
        } else {
          if (currentValue.left === null) {
            currentValue.left = node;
            return;
          }
          currentValue = currentValue.left;
        }
      }
    }
  }
  find(data) {
    let currentValue = this.v;
    while (currentValue) {
      if (data < currentValue.data) {
        currentValue = currentValue.left;
      } else if (data > currentValue.data) {
        currentValue = currentValue.right;
      } else {
        return currentValue;
      }
    }
    return null;
  }
  has(data) {
    return this.find(data) !== null;
  }
  remove(data) {
    this.v = insertNode(this.v, data);
    function insertNode(newData, data) {
      if (!newData) {
        return null;
      }
      if (data > newData.data) {
        newData.right = insertNode(newData.right, data);
        return newData;
      } else if (data < newData.data) {
        newData.left = insertNode(newData.left, data);
        return newData;
      } else {
        if (!newData.left && !newData.right) {
          return null;
        }
      }
      if (!newData.left) {
        newData = newData.right;
        return newData;
      }
      if (!newData.right) {
        newData = newData.left;
        return newData;
      }
      let minNode = newData.right;
      while (minNode.left) {
        minNode = minNode.left;
      }
      newData.data = minNode.data;
      newData.right = insertNode(newData.right, minNode.data);
      return newData;
    }
  }
  min() {
    let currentValue = this.v;
    while (currentValue.left !== null) {
      currentValue = currentValue.left;
    }
    return currentValue.data;
  }
  max() {
    let currentValue = this.v;
    while (currentValue.right !== null) {
      currentValue = currentValue.right;
    }
    return currentValue.data;
  }
}

module.exports = {
  BinarySearchTree,
};
