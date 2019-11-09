var documenterSearchIndex = {"docs":
[{"location":"#ProgressLogging.jl-1","page":"Home","title":"ProgressLogging.jl","text":"","category":"section"},{"location":"#","page":"Home","title":"Home","text":"","category":"page"},{"location":"#","page":"Home","title":"Home","text":"Modules = [ProgressLogging]","category":"page"},{"location":"#ProgressLogging.ProgressLogging","page":"Home","title":"ProgressLogging.ProgressLogging","text":"ProgressLogging: a package for defining progress logs\n\n(Image: Stable) (Image: Dev) (Image: Build Status) (Image: Codecov) (Image: Coveralls)\n\nProgressLogging.jl is a package for defining progress logs.  It can be used to report progress of a loop/loops with time-consuming body:\n\njulia> using ProgressLogging\n\njulia> @progress for i in 1:10\n           sleep(0.1)\n       end\n\nThis package does not contain any progress monitors for visualizing the progress of the program.  You need to install a package supporting progress logs created by ProgressLogging.jl API.  For example:\n\nJuno\nConsoleProgressMonitor.jl\n\n\n\n\n\n","category":"module"},{"location":"#ProgressLogging.@logprogress","page":"Home","title":"ProgressLogging.@logprogress","text":"@logprogress [name] progress [key1=val1 [key2=val2 ...]]\n\nThis macro must be used inside @withprogress macro.\n\nLog a progress event with a value progress.  The expression progress must be evaluated to be a real number between 0 and 1 (inclusive), a NaN, or a string \"done\".\n\nOptional first argument name can be used to change the name of the progress bar.  Additional keyword arguments are passed to @logmsg.\n\n\n\n\n\n","category":"macro"},{"location":"#ProgressLogging.@progress-Tuple","page":"Home","title":"ProgressLogging.@progress","text":"@progress [name=\"\", threshold=0.005] for i = ..., j = ..., ...\n@progress [name=\"\", threshold=0.005] x = [... for i = ..., j = ..., ...]\n\nShow a progress meter named name for the given loop or array comprehension if possible. Update frequency is limited by threshold (one update per 0.5% of progress by default).\n\n\n\n\n\n","category":"macro"},{"location":"#ProgressLogging.@withprogress","page":"Home","title":"ProgressLogging.@withprogress","text":"@withprogress [name=\"\"] ex\n\nCreate a lexical environment in which @logprogress can be used to emit progress log events without manually specifying the log level, _id, and name (log message).\n\n@withprogress name=\"iterating\" begin\n    for i = 1:10\n        sleep(0.5)\n        @logprogress i/10\n    end\nend\n\n\n\n\n\n","category":"macro"},{"location":"#ProgressLogging.progress-Tuple{Any}","page":"Home","title":"ProgressLogging.progress","text":"progress(f::Function; name = \"\")\n\nEvaluates f with id as its argument and makes sure to destroy the progress bar afterwards. To update the progress bar in f you can call a logging statement like @info or even just @logmsg with _id=id and progress as arguments.\n\nprogress can take either of the following values:\n\n0 <= progress < 1: create or update progress bar\nprogress == nothing || progress = NaN: set progress bar to indeterminate progress\nprogress >= 1 || progress == \"done\": destroy progress bar\n\nThe logging message (e.g. \"foo\" in @info \"foo\") will be used as the progress bar's name.\n\nLog level must be higher or equal to LogLevel(-1).\n\nProgressLogging.progress() do id\n    for i = 1:10\n        sleep(0.5)\n        @info \"iterating\" progress=i/10 _id=id\n    end\nend\n\n\n\n\n\n","category":"method"}]
}
