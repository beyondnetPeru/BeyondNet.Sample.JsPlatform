# BeyondNet.Sample.JsCleanArchitecture
A sample architecture applying clean-architecture with JS

Over the last several years we’ve seen a whole range of ideas regarding the architecture of systems. These include:

Hexagonal Architecture (a.k.a. Ports and Adapters) by Alistair Cockburn and adopted by Steve Freeman, and Nat Pryce in their wonderful book Growing Object Oriented Software
Onion Architecture by Jeffrey Palermo
Screaming Architecture from a blog of mine last year
DCI from James Coplien, and Trygve Reenskaug.
BCE by Ivar Jacobson from his book Object Oriented Software Engineering: A Use-Case Driven Approach
Though these architectures all vary somewhat in their details, they are very similar. They all have the same objective, which is the separation of concerns. They all achieve this separation by dividing the software into layers. Each has at least one layer for business rules, and another for interfaces.

Each of these architectures produce systems that are:

Independent of Frameworks. The architecture does not depend on the existence of some library of feature laden software. This allows you to use such frameworks as tools, rather than having to cram your system into their limited constraints.
Testable. The business rules can be tested without the UI, Database, Web Server, or any other external element.
Independent of UI. The UI can change easily, without changing the rest of the system. A Web UI could be replaced with a console UI, for example, without changing the business rules.
Independent of Database. You can swap out Oracle or SQL Server, for Mongo, BigTable, CouchDB, or something else. Your business rules are not bound to the database.
Independent of any external agency. In fact your business rules simply don’t know anything at all about the outside world.
The diagram at the top of this article is an attempt at integrating all these architectures into a single actionable idea.
