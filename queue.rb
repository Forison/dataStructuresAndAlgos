class Queue
	def initialize(stack=[])
		@stack = stack
	end
	def enque(arg)
		@stack<<arg
	end
	def dequeue
		@stack.delete_at(0)
	end
end

	 q = Queue.new
	 q.enque(23)
	 q.enque(27)
	 q.enque(2)
	 p q.dequeue
	 p q.dequeue