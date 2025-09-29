# Angular CLI
## CLI Config
### Inline Config
```bash
    ng config schematics.@schematics/angular:component.inlineTemplate true
    ng config schematics.@schematics/angular:component.inlineStyle true
    ng config schematics.@schematics/angular:component.skipTests true
```
### Skipping .git initialization

```bash
    # makes Angular use Angular’s official schematics by default.
        ng config -g cli.defaultCollection @schematics/angular
    ng config -g schematics.@schematics/angular:application.skipGit true
```

