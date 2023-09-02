// creating an array and passing the number, questions, options, and answers
let questions = [
  {
    numb: 1,
    question: " The use of __________ works on the principle of locality.",
    answer: "Cache memory",
    options: [
      "Cache memory",
      "Interrupts",
      " Polling",
      "DMA"
    ]
  },
    {
    numb: 2,
    question: "Consider a computer system with 6 tape drives and n processes completing for them. What is the maximum value of n for the system to be deadlock free assuming each processes may need 3 tape drives?",
    answer: " 2",
    options: [
      "3",
      "34",
      "6",
      "5"
    ]
  },
  {
    numb: 3,
    question: "When size of the memory is increased the page replacement policy that sometimes leads to more page faults is",
    answer: "FIFO",
    options: [
      "FIFO",
      "Optimal",
      "LRU",
      "None of the above"
    ]
  },
    {
    numb: 4,
    question: "The capacity of a memory unit = The number of words x The number of bits/words. For the memory of 4k x 16 the number of separate address and data lines needed is",
    answer: " 12 address and 16 data lines",
    options: [
      " 12 address and 16 data lines",
      "  12 address and 18 data lines",
      " 12 address and 10 data lines",
      " 12 address and 15 data lines"
    ]
  },


  {
    numb: 5,
    question: "A system has m number of resources of same type and 3 processes A, B and C. share these resources. A, B and C have the peak demand of 3, 4 and 6 respectively. Deadlock will not occur if",
    answer: "m = 13",
    options: [
      "m = 15",
      " m = 13",
      "m = 19",
      "m = 10"
    ]
  },


  {
    numb: 6,
    question: "When the result of computation depends on the speed of the processes involved there is said to be",
    answer: "Race condition",
    options: [
      "A deadlock",
      " A time lock",
      "Cycle stealing",
      "Race condition"
    ]
  }
,

  {
    numb: 7,
    question: "Software interrupt is required by the processor to",
    answer: "Obtain system services, which need execution of privileged instruction",
    options: [
      " Return from subroutine",
      "Obtain system services, which need execution of privileged instruction",
      " Test the interrupt system of the processor",
      "Implement co-routines"
    ]
  },

  {
    numb: 8,
    question: "  Consider a counting semaphore which was initialized to 10 and then 6P (wait) operation and 4v (signal) operations were completed on this semaphore. What is the resulting value of semaphore? ",
    answer: "8",
    options: [
      "10",
      " 26",
      "8",
      "14"
    ]
  },

  {
    numb: 9,
    question: "  How many child processes are created if a process executes the code fork(); fork();fork()",
    answer: "7",
    options: [
      "5",
      "7",
      "8",
      "9"
    ]
  },

  {
    numb: 10,
    question: "  Usually _____________ invokes the system calls",
    answer: " A software interrupt",
    options: [
      " A privileged instruction",
      " Polling",
      " A software interrupt",
      " An indirect jump"
    ]
  },
  {
    numb: 11,
    question: " We have a system with a two level paging scheme whose description is given below:Regular memory access time = 150ns,Page fault servicing time = 8ms,TLB hit ratio = 90%,Page fault rate is one in every 10,000 instructions.An average instruction takes 100ns of CPU time and two memory accesses.The effective average instruction execution time is",
    answer: " 1230ns",
    options: [
      "700ns",
      "1500ns",
      "1509ns",
      " 1230ns"
    ]
  },

  {
    numb: 12,
    question: " For time-shared operating systems the most suitable scheduling policy is",
    answer: "Round robin",
    options: [
      "Elevator",
      "First come first served",
      "Shortest job first",
      "Round robin"
    ]
  },

  {
    numb: 13,
    question: "The average time to service a page fault is 10ms and the time taken to access the memory is 1µs. A 99.99% hit ratio results in average memory access time of ",
    answer: "1.9999μs",
    options: [
      "11ms",
      " 1.9999μs",
      "15ms",
      "1ms"
    ]
  },

  {
    numb: 14,
    question: " We have a FIFO page replacement policy for a virtual memory system. Increase the number of page frames in the main memory for an arbitrary page access pattern. This will",
    answer: " Sometimes increase the number of page faults4",
    options: [
      " Sometimes increase the number of page faults",
      " Always increase the number of page faults",
      "None of these",
      "Never affect the number of page faults"
    ]
  },

  {
    numb: 15,
    question: "We have a CPU that generates virtual addresses of 32 bits and the page size is of 4kbyte. Transition look aside buffer (TLB) of the processor can hold a total of 128 page table entries and is 4-way set associative. What is the minimum size of the TLB tag? ",
    answer: "11",
    options: [
      "11",
      "23",
      " 34",
      "None of these"
    ]
  }
    
];