var res =[];
var reversePrint = function(head) {
    recur(head);
    return res;
};

var recur =function (node){
    if(!node){
        return ;
    }
    recur(node.next);
    res.push(node.val)
}

 function ListNode(val) {
     this.val = val;
     this.next = null;
 }

 const node  = new ListNode(1);
 node.next = new ListNode(2);
 node .next.next = new ListNode(3);
 node .next.next.next = new ListNode(4);


 reversePrint(node);