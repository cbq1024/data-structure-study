#include <iostream>
#include "sq_list.h"


bool init_list(SqList &list) {
    list.length = 0;
    for (int i = 0; i < MaxSize; ++i) {
        list.data[i] = i;
        list.length++;
    }
    return true;
}

void show_info(const SqList &list) {
    for (int i = 0; i < list.length; ++i) {
        std::cout << list.data[i] << " \t";
    }
    std::cout << std::endl;
    std::cout << std::endl;
}
