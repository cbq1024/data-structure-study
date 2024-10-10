//
// Created by mcdd2024 on 2024/9/29.
//

#ifndef SQ_LIST_H
#define SQ_LIST_H

#define MaxSize 100
typedef int ElemType;

/**
 * 静态顺序表
 */
typedef struct{
    ElemType data[MaxSize];
    int length;
}SqList;

/**
 * 初始化操作
 * @param L L
 * @return code status
 */
bool init_list(SqList &list);

/**
 * 遍历输出
 * @param L L
 */
void show_info(const SqList &list);



#endif //SQ_LIST_H
