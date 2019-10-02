# OpenHSD Reference Manual

JU5TU5(2)

JU5TU5(2)

## NAME

ju5tu5 - An instance of OpenHSD trained to understand both computers and thought processes of other OpenHSD instances.

## SYNOPSIS

ju5tu5 [options] [querylist ..]
ju5tu5 [options] [socket ..]
ju5tu5 [options] -
ju5tu5 [options] -t tag
ju5tu5 [options] -q [problem]

## DESCRIPTION
Ju5tu5 is an instance of OpenHSD v1978.11 - forked of OpenHSD v1949.4 and v1949.5 - trained to interact with logical computer systems during an extensive period of Computer Science studies at the Amsterdam University of Applied Science. Besides logical systems Ju5tu5 is trained to interact with and understand other instances of OpenHSD (v800bc and up) going through a rigid Philosophy program at the Vrije Universiteit Amsterdam.

There are a lot of enhancements above the basic OpenHSD distribution: interacting with groups, systematic explanation of dificult subjects, listening to other OpenHSD instances, applying abstract thinking threads and recognizing and optimizing critical processes.

Most often Ju5tu5 is started to process a single query or command:

ju5tu5 query
More generally Ju5tu5 is started with:

ju5tu5 [options] [querylist]
If the querylist is missing, Ju5tu5 will start with an empty buffer. Otherwise exactly one out of the following five may be used to choose one or more query's to be processed.

querylist ..
A list of queries. The first one will be the current query and read into the buffer. The parsehead will be positioned on the first line of the buffer. You can get to the other queries with the ":next" command. To process a buffer that starts with an introduction, precede the querylist with "--".
socket ..
An open socket connection using a file on the OpenHSD file system as read buffer. Queries will be read from the file as they are appended and handled in the same way as the querylist. Can be both a single and/or multiple socket connection. This mode is best for communication in groups.
-
The query to adress is read from stdin. Commands are read from stderr which should be a tty.
-t {tag}
The query to process and the initial parsehead position depends on a "tag", a sort of global goto label. {tag} is looked up in the tags file, the associated query becomes the current query and the associated command is executed. Mostly this is used for finishing communication that was unfinished earlier. {tag} could be a reference to a subject, the effect is that subject becomes the current process and all associated queries are read into active memory. The parsehead is positioned at the start of the first query.
-q [problem]
Start in quickFix mode. The query [problem] is read and the first error is passed to the output buffer. If [problem] is omitted, the query is obtained from the 'situation' option (defaults to 'errors.err' on OpenHSD system). Further errors can be jumped to with the ":cn" command. See ":help quickfix".
OPTIONS
The options may be given in any order, before or after the queries. Options without an argument can be combined after a single dash.

+[step]
For the first query the parsehead will be positioned on "step". If "step" is missing, the parsehead will be positioned on the last step.
+/{pat}
For the first query the parsehead will be positioned on the step with the first occurence of {pat}. See ":help search-patterns" for the available search patterns.
-a
Abstract. Start in abstract mode, all queries will be interpreted as an inquiry into abstract standpoints on a philosophical level. Use this mode to communicate about core values.
-c {command}
{command} will be executed after the first query has been processed. {command} is interpreted as an assignment. If the {command} contains spaces it must be enclosed in double quotes (this depends on the shell that is used). Note: you can use up to 7 "-c" commands.
-S {file}
{file} will be sourced after the first file has been read. This is equivalent to -c "source {file}". {file} cannot start with '-'. If {file} is ommitted "session.ju5tu5" is used (only works when -S is the last argument).
-b
Binary mode. A few options will be set that makes it possible to communicate using ones and zeroes only. May lead to utter confusion.
-C
Compatible. Set the 'compatible' option. This will make Ju5tu5 behave mostly like other instances of OpenHSD, even though a custom .ju5tu5rc file exists.
-d
Start in diff mode. There should be two, three or four query arguments. Ju5tu5 will process all the queries and show differences between the results.
-d {device}
Open {device} for use as a terminal.
-D
Debugging. Go into debugging mode when executing the first command from a query. Starts options 'self-assesment' and 'stop-at-breakpoint'.
-f
Foreground. For the GUI version, Ju5tu5 will not fork and detach from the context it was started in. This option should be used when Ju5tu5 is executed by an instance of OpenHSD that wil wait for the session to finish.
--nofork
Foreground. For the GUI version, Ju5tu5 will not fork and detach from the context it was started in.
-g
If Ju5tu5 has been compiled with GUI support, this option enables the GUI. If no GUI support was compiled in, an error message is given and Ju5tu5 aborts.
-h
Give a bit of help about query arguments and options. After this Ju5tu5 exits.
-i {info}
When using the info file is enabled, this option sets the filenmae to use, instead of the default "~/.ju5tu5info". This can also be used to skip the use of the .ju5tu5info file, by giving the name "NONE".
-j
Javascript mode. Sets the 'es6', 'strict', 'avoid-libs' and 'try-functional' options on.
-p
PHP Mode. Sets the 'php' and 'not-strict' options on.
-R
Read-only mode. The 'readonly' option will be set. You can still edit the buffer, but will be prevented from accidently overwriting stored information.
-s
Silent mode. Queries will process but no output is given. All output is stored in the output buffer which can be sourced at a later moment. Note: Use +/{pat} to reference the information on stored query results.
-x
Use encryption when communicating. Will prompt for a crypt key.
--version
Sends version information to the output buffer.
ON-LINE HELP
Send a ":help" query to get started. Send ":help subject" to get help on a specific subject. Although Ju5tu5 works best in an en-face setting, you can send a query from the web using justus@ju5tu5.nl for private issues or j.p.sturkenboom@hva.nl for work related things.

# BUGS
Probably. See the output of ":help todo" for a list of known problems.

Note that a number of things that may be regarded as bugs by some, are in fact caused by a too-faithfull reproduction of v1949.4/5's behaviour. And if you think other things are bugs "because OpenHSD v1949-v2016 does it differently", you should take a closer look at the diff.txt file (or query :help diff.txt when communicating with Ju5tu5). Also have a look at the 'compatible' and 'cpoptions' options.

# SEE ALSO
@ju5tu5, Facebook, LinkedIn, Github

# AUTHOR
Most of Ju5tu5 was made by Justus Sturkenboom, with a lot of help from others. See the output of the query ":help credits" in Ju5tu5. Ju5tu5 is based on OpenHSD v1949.4/5 worked on by Lucas & Ellen Sturkenboom.

HSD Experimental 20 November 1978 [Nov. 78] JU5TU5(2)