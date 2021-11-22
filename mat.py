# arr=[[11,2,4],
#     [4,5,6],
#     [10,8,-12]]
# i=0
# sum_dg1=0
# sum_dg2=0
# diff=0
# while i<len(arr):
#     j=0
#     while j<len(arr):
#         # print(arr[i][j])
#         if arr[i][j]==arr[0][0] or arr[i][j]==arr[1][1] or arr[i][j]==arr[2][2]:
#             sum_dg1+=arr[i][j]
#             # print(arr[i][j])
#         if arr[i][j]==arr[0][2] or arr[i][j]==arr[1][1] or arr[i][j]==arr[2][0]:
#             sum_dg2+=arr[i][j]
#             print(arr[i][j])
#         j+=1
#     i+=1
# print(sum_dg1)
# print(sum_dg2)
# return diff


def miniMaxSum(arr):
    # Write your code here
    i=0
    min1=min(arr)
    max1=max(arr)
    count_min=0
    count_max=0
    output=[]
    while i<len(arr):
        if arr[i]!=min1:
            # print(arr[i])
            count_max+=arr[i]
        if arr[i]!=max1:
            count_min+=arr[i]
        i+=1
    # print(count_min)
    # print(count_max)
    output.append(count_min)
    output.append(count_max)
    return output
print(miniMaxSum([1,2,3,4,5]))