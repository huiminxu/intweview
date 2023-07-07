// 给出两个二叉树，请写出一个判断两个二叉树是否相等的函数。 
// 判断两个二叉树相等的条件是：两个二叉树的结构相同，并且相同的节点上具有相同的值。
var isSameTree = function(p, q) {
    if(p == null && q == null) 
        return true;
    if(p == null || q == null) 
        return false;
    if(p.val != q.val) 
        return false;
    return isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
};
// 链接：https://leetcode.cn/problems/same-tree/solution/hua-jie-suan-fa-100-xiang-tong-de-shu-by-guanpengc/

// * function TreeNode(val, left, right) {
//     *     this.val = (val===undefined ? 0 : val)
//     *     this.left = (left===undefined ? null : left)
//     *     this.right = (right===undefined ? null : right)
//     * }



